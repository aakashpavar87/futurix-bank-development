package com.futurix.services;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.futurix.emailSender.EmailSenderService;
import com.futurix.entities.TblAccount;
import com.futurix.entities.TblCustomer;
import com.futurix.repositories.AccountRepo;
import com.futurix.repositories.CustomerRepo;

import jakarta.mail.MessagingException;

@Service
public class AccountService {
	@Autowired
	private AccountRepo accountRepo;
	@Autowired
	private CustomerRepo customerRepo;
	
	@Autowired
	private EmailSenderService emailSender;
	
	//	Create Account
	public void createAccount(TblAccount account , int id) throws MessagingException {

		account.setDateofopening(LocalDate.now());
		account.setLastactivitydate(LocalDate.now());
		TblCustomer foundCustomer =  customerRepo.findById(id).orElse(null);
		account.setAccountnumber((int) foundCustomer.getAccountNumber());
		account.setBalance((double) 0);
		account.setStatus("Not Verified");
		accountRepo.save(account);
		//	Sending Mail to Customer that they are registered successfully ...
		System.out.println("Email Start");
		//	emailSender.sendSimpleEmail(foundCustomer.getEmail(), "Account Opening in Bank", "Welcome to the future of Fintech");
		emailSender.sendMailWithAttachment(foundCustomer.getEmail(), 
				"Account open process is completed", "Welcome", 
				"C:\\Users\\DELL\\OneDrive\\Desktop\\TYProject\\futurix-bank-development\\Futurix-Bank-Backend\\documents\\goku.webp");
		System.out.println("Email End");
		foundCustomer.setAccount(account);
		customerRepo.save(foundCustomer);
		
		account.setCustomer(foundCustomer);
		accountRepo.save(account);
		
	}
	
	//	Select all Account
	public List<TblAccount> retreiveAllAccount(){
		return accountRepo.findAll();	
	}
	
	
	//	Select one account
	public TblAccount findAccount(int id) {
		TblCustomer foundCustomer = customerRepo.findById(id).orElse(null);
		TblAccount foundAccount =  foundCustomer.getAccount();		
		return foundAccount;
	}
	
	
	//	Delete Account 
	public void deleteAccount(int  id) {
   TblCustomer foundCustomer =  customerRepo.findById(id).orElse(null);
	TblAccount foundAccount = foundCustomer.getAccount();
	accountRepo.delete(foundAccount);
	}
	
	//	Update Account
	public void updateAccount(int id ,  TblAccount account) {
		TblCustomer foundCustomer = customerRepo.findById(id).get();
		TblAccount foundAccount = foundCustomer.getAccount();
		foundAccount =  account;
		accountRepo.save(foundAccount);
	}
	
	
	
}
