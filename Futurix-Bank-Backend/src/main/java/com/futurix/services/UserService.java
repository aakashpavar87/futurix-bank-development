package com.futurix.services;

import java.io.IOException;
import java.time.Duration;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import com.futurix.emailSender.EmailSenderService;
import com.futurix.entities.TblCustomer;
import com.futurix.exception.NotFoundException;
import com.futurix.filestorage.FileDataService;
import com.futurix.filestorage.ProfileImageData;
import com.futurix.repositories.CustomerRepo;

import jakarta.mail.MessagingException;

@Component
public class UserService {
	@Autowired
	private CustomerRepo customerRepo;

	@Autowired
	private EmailSenderService emailSenderService;
	

	
	@Autowired
	private FileDataService fileDataService;

	// Insert Customer
	public TblCustomer createUser(TblCustomer customer) {
		customer.setDateOfOpening(LocalDate.now());
		try {
			String otp = emailSenderService.generateOtp();
			emailSenderService.sendOtpEmail(customer.getEmail(), otp);
			customer.setOtp(otp);
			customer.setOtpGeneratedTime(LocalDateTime.now());
		} catch (MessagingException e) {
			// TODO Auto-generated catch block
			throw new RuntimeException("Unable to send otp please try again");
		}
		return customerRepo.save(customer);
	}

	// Select All Customer
	public List<TblCustomer> retreiveAllCustomer() {
		return customerRepo.findAll();
	}

	// Delete Customer
	public void removeCustomer(int id) {
		customerRepo.deleteById(id);
	}

	// Select one Customer
	public TblCustomer findCustomer(int id) {
		TblCustomer foundCustomer = customerRepo.findById(id).orElse(null);
		if (foundCustomer == null)
			throw new NotFoundException("User not found with " + id);
		return foundCustomer;
	}

	// Update one customer
	public void updateCustomer(int id, TblCustomer customer) {
		TblCustomer foundCustomer = customerRepo.findById(id).get();
		foundCustomer = customer;
		foundCustomer.setId(id);
		customerRepo.save(foundCustomer);
	}

	public String verifyAccount(String email, String otp) {
		
		TblCustomer user = customerRepo.findByEmail(email)
				.orElseThrow(() -> new RuntimeException("User not found with this email: " + email));
		
		if (user.getOtp().equals(otp)
				&& Duration.between(user.getOtpGeneratedTime(), LocalDateTime.now()).getSeconds() < (2 * 60)) {
			user.setActive(true);
			customerRepo.save(user);
			
			return "OTP verified you can login";
		}
		
		return "Please regenerate otp and try again";
	}
	
	public String verifyOTP(String email, String otp) {
		TblCustomer user = customerRepo.findByEmail(email)
				.orElseThrow(() -> new RuntimeException("User not found with this email: " + email));
		if (user.getOtp().equals(otp)
				&& Duration.between(user.getOtpGeneratedTime(), LocalDateTime.now()).getSeconds() < (2 * 60)) {
			user.setActive(true);
			customerRepo.save(user);
			return "OTP verified you can reset password";
		}
		return "Please regenerate otp and try again";
	}

	public String regenerateOtp(String email) {
		TblCustomer user = customerRepo.findByEmail(email)
				.orElseThrow(() -> new NotFoundException("User not found with this email: " + email));
		String otp = emailSenderService.generateOtp();
		try {
			emailSenderService.sendOtpEmail(email, otp);
		} catch (MessagingException e) {
			throw new RuntimeException("Unable to send otp please try again");
		}
		user.setOtp(otp);
		user.setOtpGeneratedTime(LocalDateTime.now());
		customerRepo.save(user);
		return "Email sent... please verify account within 2 minute";
	}
	
	public TblCustomer addProfileImage(int id, MultipartFile file) throws IllegalStateException, IOException {
		TblCustomer tblCustomer = customerRepo.findById(id).orElse(null);
		if(file != null) {
			ProfileImageData image = fileDataService.uploadToProfileImageStorage(file);
			if(tblCustomer.getProfileImage() == null) {
				tblCustomer.setProfileImage(image);
				image.setCustomer(tblCustomer);
			}
			else {
				tblCustomer.setProfileImage(null);
				tblCustomer.setProfileImage(image);
			}

			customerRepo.save(tblCustomer);
		} else {
			throw new NotFoundException("Sorry but user not exists");
		}
		return tblCustomer;
	}

	public TblCustomer findCustomerByEmail(String email) {
		
		TblCustomer tblCustomer = customerRepo.findByEmail(email).orElse(null);
		if(tblCustomer == null)
			throw new NotFoundException("Customer is not found with this email "+email);
		return tblCustomer;
	}

	public String forgotPassword(String email) {
		// TODO Auto-generated method stub
		TblCustomer customer = findCustomerByEmail(email);
		String otp = emailSenderService.generateOtp();
		try {
			emailSenderService.sendOtpEmail(email, otp);
		} catch (MessagingException e) {
			throw new RuntimeException("Unable to send otp please try again");
		}
		customer.setOtp(otp);
		customer.setOtpGeneratedTime(LocalDateTime.now());
		customerRepo.save(customer);
		return "Otp has been sent to your email verify to change password...";
	}

	public String resetPassword(String email, String password) {

		TblCustomer customer = findCustomerByEmail(email);
		
		customer.setPassword(password);
		
		customerRepo.save(customer);
		
		return "Password has reset successfully";
	}
}
