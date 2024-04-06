package com.futurix.services;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.futurix.entities.TblInvestor;
import com.futurix.exception.NotFoundException;
import com.futurix.filestorage.FileDataService;
import com.futurix.filestorage.ProfileImageData;
import com.futurix.repositories.InvestorRepo;

@Service
public class InvestorService {
	
	@Autowired
	private InvestorRepo investorRepo;
	
	@Autowired
	private FileDataService fileDataService;
	
	// Add Investor
	void createInvestor(TblInvestor investor) {
		investorRepo.save(investor);
	}
	
	// Get a Investor
	public TblInvestor getInvestor(int investorId) {
		return investorRepo.findById(investorId).get();
	}
	
	// Get All Investors
	public List<TblInvestor> getAllInvestor() {
		return investorRepo.findAll();
	}
	
	// Add Investor
	public void addInvestor(TblInvestor investor) {
		investorRepo.save(investor);
	}
	
	
	// Delete an Investor
	public void deleteInvestor(int investorId) {
		investorRepo.deleteById(investorId);
	}
	
	// Add Investor Image
	public TblInvestor addProfileImage(int id, MultipartFile file) throws IllegalStateException, IOException {
		TblInvestor tblInvestor = investorRepo.findById(id).orElse(null);
		if(file != null) {
			ProfileImageData image = fileDataService.uploadToProfileImageStorage(file);
			if(tblInvestor.getProfileImage() == null) {
				tblInvestor.setProfileImage(image);
				image.setInvestor(tblInvestor);
			}
			else {
				tblInvestor.setProfileImage(null);
				tblInvestor.setProfileImage(image);
			}

			investorRepo.save(tblInvestor);
		} else {
			throw new NotFoundException("Sorry but Investor not exists");
		}
		return tblInvestor;
	}
	
	
	// Update an Investor
	public void updateInvestor(TblInvestor updatedInvestor, int investorId) {
		TblInvestor foundInvestor = investorRepo.findById(investorId).get();
		foundInvestor = updatedInvestor;
		investorRepo.save(foundInvestor);
	}

	public TblInvestor getInvestorByEmail(String email) {
		return investorRepo.findByInvestorEmail(email).orElseThrow(()->new RuntimeException("Investor not found with this email.."));
	}
	
	
}
