package com.futurix.services;

import java.util.List;
import java.util.function.Predicate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.futurix.entities.TblInvestment;
import com.futurix.entities.TblInvestor;
import com.futurix.repositories.InvestmentRepo;
import com.futurix.repositories.InvestorRepo;

@Service
public class InvestmentService {
	@Autowired
	private InvestmentRepo investmentRepo;
	
	@Autowired
	private InvestorRepo investorRepo;
	
	// Add Investment
	public void addInvestment(int investorId, TblInvestment investment) {
		
		investmentRepo.save(investment);
		
		TblInvestor tblInvestor = investorRepo.findById(investorId).get();
		tblInvestor.getInvestmentList().add(investment);
		investorRepo.save(tblInvestor);
		
		investment.setInvestor(tblInvestor);
	}
	
	// Delete Investment
	public void deleteInvestment(int investmentId, int investorId) {
		
		TblInvestor tblInvestor = investorRepo.findById(investorId).get();
		List<TblInvestment> investmentList = tblInvestor.getInvestmentList();
		Predicate<? super TblInvestment> predicate = investment -> investment.getInvestmentId() == investmentId;
		investmentList.removeIf(predicate);
		investmentRepo.deleteById(investmentId);
		
	}
	
	// Update Investment
	public void updateInvestment(int investmentId, int investorId, TblInvestment investment) {
		
		TblInvestor tblInvestor = investorRepo.findById(investorId).get();
		TblInvestment tblInvestment = investmentRepo.findById(investmentId).get();
		
		List<TblInvestment> investmentList = tblInvestor.getInvestmentList();
		Predicate<? super TblInvestment> predicate = gotInvestment -> gotInvestment.getInvestmentId() == investmentId;
		
		investmentList.removeIf(predicate);
		investmentList.add(investment);
		
		tblInvestment = investment;
		investmentRepo.save(tblInvestment);
		investorRepo.save(tblInvestor);
		
	}
	
	// Get Investment of Investor
	public List<TblInvestment> getInvestmentOfInvestor(int investorId) {
		return investorRepo.findById(investorId).get().getInvestmentList();
	}
	
	// Get All Investments
	public List<TblInvestment> getAllInvestment() {
		return investmentRepo.findAll();
	}
}
