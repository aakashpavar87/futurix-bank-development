package com.futurix.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.futurix.entities.TblInvestor;
import com.futurix.repositories.InvestorRepo;

@Service
public class InvestorService {
	
	@Autowired
	private InvestorRepo investorRepo;
	
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
	
	// Update an Investor
	public void updateInvestor(TblInvestor updatedInvestor, int investorId) {
		TblInvestor foundInvestor = investorRepo.findById(investorId).get();
		foundInvestor = updatedInvestor;
		investorRepo.save(foundInvestor);
	}
	
	
}
