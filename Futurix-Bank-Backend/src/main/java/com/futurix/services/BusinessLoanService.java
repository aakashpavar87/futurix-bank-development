package com.futurix.services;

import java.util.List;
import java.util.function.Predicate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.futurix.entities.TblBusiness_loan;
import com.futurix.entities.TblCustomer;
import com.futurix.entities.TblLoan;
import com.futurix.repositories.BusinessLoanRepo;
import com.futurix.repositories.CustomerRepo;
import com.futurix.repositories.LoanRepo;

@Service
public class BusinessLoanService {
	@Autowired
	private BusinessLoanRepo businessLoanRepo;
	
	@Autowired
	private LoanRepo loanRepo;
	
	@Autowired
	private CustomerRepo customerRepo;
	
	
	public void addBusinessLoan(int loanId, TblBusiness_loan business_loan) {
		
		TblLoan foundLoan = loanRepo.findById(loanId).get();
		
		TblCustomer customer = foundLoan.getCustomer();
		
		business_loan.setInterest_rate(12);
					
		business_loan.setLoan_term(foundLoan.getDurationInYears());
		
		String foundEmail = customer.getEmail();
		
		business_loan.setEmail(foundEmail);
		
		foundLoan.setBusinessLoan(business_loan);
		
		List<TblLoan> loanList = customer.getLoanList();
		
		Predicate<? super TblLoan> predicate = loan -> loan.getLoan_id() == loanId;
		
		loanList.removeIf(predicate);
		
		loanList.add(foundLoan);
		
		customer.setLoanList(loanList);
		
		customerRepo.save(customer);
		
		foundLoan.setCustomer(customer);
				
		business_loan.setLoan(foundLoan);
		
		loanRepo.save(foundLoan);
		
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
