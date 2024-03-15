package com.futurix.entities;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;

@Entity
public class TblLoan {
    @Id 
    @GeneratedValue(strategy = GenerationType.AUTO)
	private int Loan_id;
    
    @Column(nullable = false)
    private long accountNumber;
    
    @Column(nullable = false)
    private double loanAmount;
    
    @Column(nullable = false)
    private String status;
    
    @Column(nullable = false)
    private int durationInYears;
    
    @Column(nullable = false)
    private LocalDate originDate;
    
    @Column(nullable = false)
    private LocalDate matureDate;
    
    @OneToOne
    private TblBusiness_loan businessLoan;
    
    @OneToOne
    private TblPersonal_Loan personal_Loan;
    
    @ManyToOne
    @JsonIgnore
    private TblCustomer customer;
    
	public TblLoan(double loan_amount, int durationInYears) {
		this.loanAmount = loan_amount;
		this.durationInYears = durationInYears;
	}

	public TblLoan() {
	}

	public int getLoan_id() {
		return Loan_id;
	}

	public void setLoan_id(int loan_id) {
		Loan_id = loan_id;
	}

	public long getAccount_number() {
		return accountNumber;
	}

	public void setAccount_number(long account_number) {
		accountNumber = account_number;
	}

	public double getLoan_amount() {
		return loanAmount;
	}

	public void setLoan_amount(double loan_amount) {
		this.loanAmount = loan_amount;
	}

	public String getStatus() {
		return status;
	}

	public int getDurationInYears() {
		return durationInYears;
	}

	public void setDurationInYears(int durationInYears) {
		this.durationInYears = durationInYears;
	}

	public TblBusiness_loan getBusinessLoan() {
		return businessLoan;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public TblCustomer getCustomer() {
		return customer;
	}

	public void setCustomer(TblCustomer customer) {
		this.customer = customer;
	}

	public void setBusinessLoan(TblBusiness_loan businessLoan) {
		this.businessLoan = businessLoan;
	}

	public TblPersonal_Loan getPersonal_Loan() {
		return personal_Loan;
	}

	public long getAccountNumber() {
		return accountNumber;
	}

	public void setAccountNumber(long accountNumber) {
		this.accountNumber = accountNumber;
	}

	public double getLoanAmount() {
		return loanAmount;
	}

	public void setLoanAmount(double loanAmount) {
		this.loanAmount = loanAmount;
	}

	public LocalDate getOriginDate() {
		return originDate;
	}

	public void setOriginDate(LocalDate originDate) {
		this.originDate = originDate;
	}

	public LocalDate getMatureDate() {
		return matureDate;
	}

	public void setMatureDate(LocalDate matureDate) {
		this.matureDate = matureDate;
	}

	public void setPersonal_Loan(TblPersonal_Loan personal_Loan) {
		this.personal_Loan = personal_Loan;
	}   
    
}
