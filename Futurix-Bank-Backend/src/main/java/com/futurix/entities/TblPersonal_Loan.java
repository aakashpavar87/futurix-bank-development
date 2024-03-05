package com.futurix.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class TblPersonal_Loan {
    @Id
	private int Loan_id;
    @Column(nullable = false)
	private int Loan_term;
    @Column(nullable = false)
	private String Loan_type;
    @Column(nullable = false)
	private double interese_rate;
    @Column(nullable = false)
	private double Monthly_payment;
    @Column(nullable = false)
	private int Credit_Score;
    @Column(nullable = false)
	private int Annual_income_borrower;
	
	
	public TblPersonal_Loan(int loan_id, int loan_term, String loan_type, double interese_rate, double monthly_payment,
			int credit_Score, int annual_income_borrower) {
		super();
		Loan_id = loan_id;
		Loan_term = loan_term;
		Loan_type = loan_type;
		this.interese_rate = interese_rate;
		Monthly_payment = monthly_payment;
		Credit_Score = credit_Score;
		Annual_income_borrower = annual_income_borrower;
	}


	public int getLoan_id() {
		return Loan_id;
	}


	public void setLoan_id(int loan_id) {
		Loan_id = loan_id;
	}


	public int getLoan_term() {
		return Loan_term;
	}


	public void setLoan_term(int loan_term) {
		Loan_term = loan_term;
	}


	public String getLoan_type() {
		return Loan_type;
	}


	public void setLoan_type(String loan_type) {
		Loan_type = loan_type;
	}


	public double getInterese_rate() {
		return interese_rate;
	}


	public void setInterese_rate(double interese_rate) {
		this.interese_rate = interese_rate;
	}


	public double getMonthly_payment() {
		return Monthly_payment;
	}


	public void setMonthly_payment(double monthly_payment) {
		Monthly_payment = monthly_payment;
	}


	public int getCredit_Score() {
		return Credit_Score;
	}


	public void setCredit_Score(int credit_Score) {
		Credit_Score = credit_Score;
	}


	public int getAnnual_income_borrower() {
		return Annual_income_borrower;
	}


	public void setAnnual_income_borrower(int annual_income_borrower) {
		Annual_income_borrower = annual_income_borrower;
	}
	
	
}
