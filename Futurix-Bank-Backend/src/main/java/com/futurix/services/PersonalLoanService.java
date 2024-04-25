package com.futurix.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.futurix.entities.TblLoan;
import com.futurix.entities.TblPersonal_Loan;
import com.futurix.repositories.LoanRepo;
import com.futurix.repositories.PersonalLoanRepo;

@Service
public class PersonalLoanService {
	@Autowired
	private PersonalLoanRepo personalLoanRepo;
	
	@Autowired
	private LoanRepo loanRepo;
	
	public void addPersonalLoan(int loanId, TblPersonal_Loan personalLoan) {
		
		TblLoan foundLoan = loanRepo.findById(loanId).get();
		personalLoan.setInterese_rate(7.5);
		foundLoan.setPersonal_Loan(personalLoan);
		double monthlyInstallmentAmount = foundLoan.getLoan_amount() / (foundLoan.getDurationInYears() * 12);
		personalLoan.setInstallment(monthlyInstallmentAmount);
		loanRepo.save(foundLoan);
		personalLoan.setLoan(foundLoan);
		personalLoanRepo.save(personalLoan);
	
	}
	
	public List<TblPersonal_Loan> getAllPersonalLoans() {
		return personalLoanRepo.findAll();
	}
	
	public TblPersonal_Loan getOnePersonaLoan(int loanId) {
		
		TblLoan foundLoan = loanRepo.findById(loanId).get();
		TblPersonal_Loan foundPersonalLoan = foundLoan.getPersonal_Loan();
		return foundPersonalLoan;
	
	}
	
	public void removePersonalLoan(int loanId) {
		
		TblLoan foundLoan = loanRepo.findById(loanId).get();
		TblPersonal_Loan foundPersonalLoan = foundLoan.getPersonal_Loan();
		personalLoanRepo.delete(foundPersonalLoan);
		foundLoan.setPersonal_Loan(null);
		loanRepo.save(foundLoan);
	
	}
	
	public void updatePersonalLoan(int loanId, TblPersonal_Loan personalLoan) {
		TblLoan foundLoan = loanRepo.findById(loanId).get();
		TblPersonal_Loan foundPersonalLoan = foundLoan.getPersonal_Loan();
		foundPersonalLoan = personalLoan;
		personalLoanRepo.save(foundPersonalLoan);
		
		foundLoan.setPersonal_Loan(foundPersonalLoan);
		loanRepo.save(foundLoan);
	}
	
	public String calculateInterest(int loanId) {
		TblLoan foundLoan = loanRepo.findById(loanId).orElseThrow(() -> new IllegalArgumentException("Loan not found"));
		TblPersonal_Loan personal_Loan = foundLoan.getPersonal_Loan();
		double interestCalculated = foundLoan.calculateInterest(personal_Loan.getInterestRate());
		return String.format("Interest calculated of loan is %f", interestCalculated);
	}
	
	public String repayLoanAmount(int loanId, double repaymentAmount) {
		TblLoan foundLoan = loanRepo.findById(loanId).orElseThrow(() -> new IllegalArgumentException("Loan not found"));
		double currentLoanAmount = foundLoan.getLoan_amount();
		String res = calculateInterest(loanId);
		System.out.println(res);
		currentLoanAmount -=  repaymentAmount;
		foundLoan.setLoan_amount(currentLoanAmount);
		loanRepo.save(foundLoan);
		return "Loan Repayment is successfull ...";
	}
}
