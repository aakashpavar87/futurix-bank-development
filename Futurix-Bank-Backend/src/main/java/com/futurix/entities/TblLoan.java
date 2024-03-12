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
    private long Account_number;
    
    @Column(nullable = false)
    private double loan_amount;
    
    @Column(nullable = false)
    private String status;
    
    @Column(nullable = false)
    private int durationInYears;
    
    @Column(nullable = false)
    private LocalDate Date_of_origanation;
    
    @Column(nullable = false)
    private LocalDate Maturity_date;
    
    @OneToOne
    private TblBusiness_loan businessLoan;
    
    @OneToOne
    private TblPersonal_Loan personal_Loan;
    
    @ManyToOne
    @JsonIgnore
    private TblCustomer customer;
    
	public TblLoan(double loan_amount, int durationInYears) {
		this.loan_amount = loan_amount;
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
		return Account_number;
	}


	public void setAccount_number(long account_number) {
		Account_number = account_number;
	}


	public double getLoan_amount() {
		return loan_amount;
	}


	public void setLoan_amount(double loan_amount) {
		this.loan_amount = loan_amount;
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


	public LocalDate getDate_of_origanation() {
		return Date_of_origanation;
	}


	public void setDate_of_origanation(LocalDate date_of_origanation) {
		Date_of_origanation = date_of_origanation;
	}


	public LocalDate getMaturity_date() {
		return Maturity_date;
	}


	public void setMaturity_date(LocalDate maturity_date) {
		Maturity_date = maturity_date;
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


	public void setPersonal_Loan(TblPersonal_Loan personal_Loan) {
		this.personal_Loan = personal_Loan;
	}   
    
}
