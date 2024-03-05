package com.futurix.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class TblBusiness_loan {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int Loan_id;
	@Column(nullable = false)
	private int Loan_term;
	@Column(nullable = false)
	private String Loan_type;
	@Column(nullable = false)
	private double Interest_rate;
	@Column(nullable = false)
	private String Business_name;
	@Column(nullable = false)
	private String Business_GST_no;
	@Column(nullable = false)
	private String Email;
	
	
	
	
	public TblBusiness_loan(int loan_id, int loan_term, String loan_type, double interest_rate, String business_name,
			String business_GST_no, String email) {
		super();
		
		Loan_id = loan_id;
		Loan_term = loan_term;
		Loan_type = loan_type;
		Interest_rate = interest_rate;
		Business_name = business_name;
		Business_GST_no = business_GST_no;
		Email = email;
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
	public double getInterest_rate() {
		return Interest_rate;
	}
	public void setInterest_rate(double interest_rate) {
		Interest_rate = interest_rate;
	}
	public String getBusiness_name() {
		return Business_name;
	}
	public void setBusiness_name(String business_name) {
		Business_name = business_name;
	}
	public String getBusiness_GST_no() {
		return Business_GST_no;
	}
	public void setBusiness_GST_no(String business_GST_no) {
		Business_GST_no = business_GST_no;
	}
	public String getEmail() {
		return Email;
	}
	public void setEmail(String email) {
		Email = email;
	}
	
	
}
