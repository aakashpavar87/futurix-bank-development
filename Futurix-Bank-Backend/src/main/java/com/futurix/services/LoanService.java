package com.futurix.services;

import java.time.LocalDate;
import java.util.List;
import java.util.function.Predicate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.futurix.entities.TblCustomer;
import com.futurix.entities.TblLoan;
import com.futurix.repositories.CustomerRepo;
import com.futurix.repositories.LoanRepo;

@Service
public class LoanService {
	
	@Autowired
	private LoanRepo loanRepo;
	
	@Autowired
	private CustomerRepo customerRepo;
	
	// Add Loan
	public void createLoan(TblLoan loan, int userId) {
		TblCustomer foundCustomer = customerRepo.findById(userId).get();
		
		loan.setAccount_number(foundCustomer.getAccount().getAccountnumber());
		loan.setOriginDate(LocalDate.now());
		loan.setMatureDate(LocalDate.now().plusYears(loan.getDurationInYears()));
		loan.setStatus("Not Active");
		foundCustomer.getLoanList().add(loan);
		loan.setCustomer(foundCustomer);
		loanRepo.save(loan);
	}
	
	// Select Loan
	public TblLoan retrieveLoan(int userId, int loanId) {
		List<TblLoan> loanList =  customerRepo.findById(userId).get().getLoanList();
		Predicate<? super TblLoan> predicate = loan -> loan.getLoan_id() == loanId;
		return loanList.stream().filter(predicate).findFirst().get();
	}
	
	// Delete Loan	
	public void deleteLoan(int userId, int loanId) {
		Predicate<? super TblLoan> predicate = loan -> loan.getLoan_id() == loanId;
		TblCustomer tblCustomer = customerRepo.findById(userId).get();
		List<TblLoan> loanList =  tblCustomer.getLoanList();
		TblLoan tblLoan = loanList.stream().filter(predicate).findFirst().get();
		loanList.removeIf(predicate);
		tblCustomer.setLoanList(loanList);
		loanRepo.deleteById(tblLoan.getLoan_id());
		customerRepo.save(tblCustomer);
	}
	
	// Select All Loans of Customer
	public List<TblLoan> retrieveAllLoansOfCustomer(int userId) {
		return customerRepo.findById(userId).get().getLoanList();
	}
	
	// Update Loan
	public void updateLoan(int userId, TblLoan loan, int loanId) {
		Predicate<? super TblLoan> predicate = foundloan -> loan.getLoan_id() == loanId;
		List<TblLoan> loanList =  customerRepo.findById(userId).get().getLoanList();
		TblLoan tblLoan = loanList.stream().filter(predicate).findFirst().get();
		loanList.removeIf(predicate);
		tblLoan = loan;
		loanList.add(tblLoan);
		loanRepo.save(tblLoan);
	}

	public List<TblLoan> getAllLoans() {
		return loanRepo.findAll();
	}
}
