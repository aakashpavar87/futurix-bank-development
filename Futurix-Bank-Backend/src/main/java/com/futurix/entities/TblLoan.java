package com.futurix.entities;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

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
    private LocalDate Date_of_origanation;
    
    @Column(nullable = false)
    private LocalDate Maturity_date;
    
    @ManyToOne
    private TblCustomer customer;
    
	public TblLoan(int loan_id, long account_number, double loan_amount, String status, LocalDate date_of_origanation,
			LocalDate maturity_date) {
		super();
		Loan_id = loan_id;
		Account_number = account_number;
		this.loan_amount = loan_amount;
		this.status = status;
		Date_of_origanation = date_of_origanation;
		Maturity_date = maturity_date;
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
	
	
    
    
}
