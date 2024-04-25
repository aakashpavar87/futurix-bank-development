package com.futurix.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;

@Entity
public class TblPersonal_Loan {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	private int loanId;
        
    @Column(nullable = false)
	private double interestRate;
    
    @Column(nullable = false)
	private int creditScore;
    
    @Column(nullable = false)
    private String purpose;
    
    @Column(nullable = false)
    private String employment;
    
    @Column(nullable = false)
    private String income;
    
    @Column(nullable = false)
    private double monthlyInstallment;
    
    @OneToOne
    @JsonIgnore
    private TblLoan loan;
	   
	public TblPersonal_Loan() {
	}

	public TblPersonal_Loan(int loan_id, double interestRate, int credit_Score, String purpose, String employment,
			TblLoan loan) {
		super();
		loanId = loan_id;
		this.interestRate = interestRate;
		creditScore = credit_Score;
		this.purpose = purpose;
		this.employment = employment;
		this.loan = loan;
	}




	public int getLoan_id() {
		return loanId;
	}


	public void setLoan_id(int loan_id) {
		loanId = loan_id;
	}

	public double getInterese_rate() {
		return interestRate;
	}


	public void setInterese_rate(double interese_rate) {
		this.interestRate = interese_rate;
	}

	public int getCredit_Score() {
		return creditScore;
	}


	public void setCredit_Score(int credit_Score) {
		creditScore = credit_Score;
	}

	public TblLoan getLoan() {
		return loan;
	}

	public void setLoan(TblLoan loan) {
		this.loan = loan;
	}

	public double getInterestRate() {
		return interestRate;
	}

	public void setInterestRate(double interestRate) {
		this.interestRate = interestRate;
	}

	public String getPurpose() {
		return purpose;
	}

	public void setPurpose(String purpose) {
		this.purpose = purpose;
	}

	public String getEmployment() {
		return employment;
	}

	public void setEmployment(String employment) {
		this.employment = employment;
	}

	public String getIncome() {
		return income;
	}

	public void setIncome(String income) {
		this.income = income;
	}

	public int getLoanId() {
		return loanId;
	}

	public void setLoanId(int loanId) {
		this.loanId = loanId;
	}

	public int getCreditScore() {
		return creditScore;
	}

	public void setCreditScore(int creditScore) {
		this.creditScore = creditScore;
	}

	public double getInstallment() {
		return monthlyInstallment;
	}

	public void setInstallment(double installment) {
		this.monthlyInstallment = installment;
	}
	
	
}
