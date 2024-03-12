package com.futurix.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.futurix.entities.TblBusiness_loan;
import com.futurix.entities.TblLoan;
import com.futurix.repositories.BusinessLoanRepo;
import com.futurix.repositories.LoanRepo;

@Service
public class BusinessLoanService {
	@Autowired
	private BusinessLoanRepo businessLoanRepo;
	
	@Autowired
	private LoanRepo loanRepo;
	
	
	public void addBusinessLoan(int loanId, TblBusiness_loan business_loan) {
		
		TblLoan foundLoan = loanRepo.findById(loanId).get();
		
		business_loan.setInterest_rate(12);
		
		String foundEmail = foundLoan.getCustomer().getEmail();
		
		business_loan.setEmail(foundEmail);
		
		foundLoan.setBusinessLoan(business_loan);
		
		loanRepo.save(foundLoan);
		
		business_loan.setLoan(foundLoan);
		
		businessLoanRepo.save(business_loan);
	
	}
	
	public List<TblBusiness_loan> getAllBusinessLoans() {
		return businessLoanRepo.findAll();
	}
	
	public TblBusiness_loan getOneBusinessLoan(int loanId) {
		
		TblLoan foundLoan = loanRepo.findById(loanId).get();
		TblBusiness_loan foundBusinessLoan = foundLoan.getBusinessLoan();
		return foundBusinessLoan;
	
	}
	
	public void removeBusinessLoan(int loanId) {
		
		TblLoan foundLoan = loanRepo.findById(loanId).get();
		TblBusiness_loan foundBusinessLoan = foundLoan.getBusinessLoan();
		businessLoanRepo.delete(foundBusinessLoan);
		foundLoan.setBusinessLoan(null);
		loanRepo.save(foundLoan);
	
	}
	
	public void updateBusinessLoan(int loanId, TblBusiness_loan businessLoan) {
		TblLoan foundLoan = loanRepo.findById(loanId).get();
		TblBusiness_loan foundBusinessLoan = foundLoan.getBusinessLoan();
		foundBusinessLoan = businessLoan;
		businessLoanRepo.save(foundBusinessLoan);
		
		foundLoan.setBusinessLoan(foundBusinessLoan);
		loanRepo.save(foundLoan);
	}
}
