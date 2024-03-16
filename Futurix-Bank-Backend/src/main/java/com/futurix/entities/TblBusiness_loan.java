package com.futurix.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
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
	private String business_name;
	
	@Column(nullable = false)
	private String business_gst_no;
	
	@Column(nullable = false)
	private String Email;
	
	@Column(nullable = false)
	private String annualProfitLoss;
	
	@Column(nullable = false)
	private String annualRevenue;
	
	@Column(nullable = false)
	private String businessType;
	
	@Column(nullable = false)
	private String city;
	
	@Column(nullable = false)
	private String loanPurpose;
	
	@Column(nullable = false)
	private String state;
	
	@Column(nullable = false)
	private String streetAddress;
	
	@Column(nullable = false)
	private String yearsinbusiness;
	
	@Column(nullable = false)
	private String zipCode;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JsonIgnore
	private TblLoan loan;
	
	
	
	public TblBusiness_loan() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public TblBusiness_loan(int id, int loan_term, double interest_rate, String business_name, String business_gst_no,
			String email, String annualProfitLoss, String annualRevenue, String businessType, String city,
			String loanPurpose, String state, String streetAddress, String yearsinbusiness, String zipCode,
			TblLoan loan) {
		super();
		this.id = id;
		Loan_term = loan_term;
		Interest_rate = interest_rate;
		this.business_name = business_name;
		this.business_gst_no = business_gst_no;
		Email = email;
		this.annualProfitLoss = annualProfitLoss;
		this.annualRevenue = annualRevenue;
		this.businessType = businessType;
		this.city = city;
		this.loanPurpose = loanPurpose;
		this.state = state;
		this.streetAddress = streetAddress;
		this.yearsinbusiness = yearsinbusiness;
		this.zipCode = zipCode;
		this.loan = loan;
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
		return business_name;
	}
	public void setBusiness_name(String business_name) {
		this.business_name = business_name;
	}
	public String getBusiness_gst_no() {
		return business_gst_no;
	}
	public void setBusiness_gst_no(String business_gst_no) {
		this.business_gst_no = business_gst_no;
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
	public String getAnnualProfitLoss() {
		return annualProfitLoss;
	}
	public void setAnnualProfitLoss(String annualProfitLoss) {
		this.annualProfitLoss = annualProfitLoss;
	}
	public String getAnnualRevenue() {
		return annualRevenue;
	}
	public void setAnnualRevenue(String annualRevenue) {
		this.annualRevenue = annualRevenue;
	}
	public String getBusinessType() {
		return businessType;
	}
	public void setBusinessType(String businessType) {
		this.businessType = businessType;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getLoanPurpose() {
		return loanPurpose;
	}
	public void setLoanPurpose(String loanPurpose) {
		this.loanPurpose = loanPurpose;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getStreetAddress() {
		return streetAddress;
	}
	public void setStreetAddress(String streetAddress) {
		this.streetAddress = streetAddress;
	}
	public String getYearsinbusiness() {
		return yearsinbusiness;
	}
	public void setYearsinbusiness(String yearsinbusiness) {
		this.yearsinbusiness = yearsinbusiness;
	}
	public String getZipCode() {
		return zipCode;
	}
	public void setZipCode(String zipCode) {
		this.zipCode = zipCode;
	}
	
	
	
}
