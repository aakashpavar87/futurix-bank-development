package com.futurix.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;

@Entity
public class TblBusiness_loan {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	@Column(nullable = false)
	private int Loan_term;
	

	@Column(nullable = false)
	private double Interest_rate;
	
	@Column(nullable = false)
	private String Business_name;
	
	@Column(nullable = false)
	private String Business_GST_no;
	
	@Column(nullable = false)
	private String Email;
	
	@OneToOne
	@JsonIgnore
	private TblLoan loan;
	
	
	
	public TblBusiness_loan() {
		super();
		// TODO Auto-generated constructor stub
	}
	public TblBusiness_loan(int loan_id, int loan_term, double interest_rate, String business_name,
			String business_GST_no, String email) {
		super();
		
		id = loan_id;
		Loan_term = loan_term;
		Interest_rate = interest_rate;
		Business_name = business_name;
		Business_GST_no = business_GST_no;
		Email = email;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getLoan_id() {
		return id;
	}
	public void setLoan_id(int loan_id) {
		id = loan_id;
	}
	public int getLoan_term() {
		return Loan_term;
	}
	public void setLoan_term(int loan_term) {
		Loan_term = loan_term;
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
	public TblLoan getLoan() {
		return loan;
	}
	public void setLoan(TblLoan loan) {
		this.loan = loan;
	}
	
	
}
