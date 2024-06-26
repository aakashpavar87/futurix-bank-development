package com.futurix.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;

@Entity
public class TblSaving_account {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long account_number;
	private Double interest_rate;
	private String interest_calc_method;
	public TblSaving_account(Double interest_rate, String interest_calc_method) {
		super();
		this.interest_rate = interest_rate;
		this.interest_calc_method = interest_calc_method;
	}
	
	
	
	public TblSaving_account() {
		super();
		// TODO Auto-generated constructor stub
	}



	@OneToOne(cascade = CascadeType.ALL)
	@JsonIgnore
	private TblAccount account;
	
	public TblAccount getAccount() {
		return account;
	}
	public void setAccount(TblAccount account) {
		this.account = account;
	}
	public Long getAccount_number() {
		return account_number;
	}
	public void setAccount_number(Long account_number) {
		this.account_number = account_number;
	}
	public Double getInterest_rate() {
		return interest_rate;
	}
	public void setInterest_rate(Double interest_rate) {
		this.interest_rate = interest_rate;
	}
	public String getInterest_calc_method() {
		return interest_calc_method;
	}
	public void setInterest_calc_method(String interest_calc_method) {
		this.interest_calc_method = interest_calc_method;
	}
	
}
