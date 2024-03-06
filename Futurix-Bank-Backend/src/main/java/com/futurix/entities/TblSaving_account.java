package com.futurix.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;

@Entity
public class TblSaving_account {
	@Id
	private Long account_number;
	private Double interest_rate;
	private String interest_calc_method;
	public TblSaving_account(Long account_number, Double interest_rate, String interest_calc_method) {
		super();
		this.account_number = account_number;
		this.interest_rate = interest_rate;
		this.interest_calc_method = interest_calc_method;
	}
	
	@OneToOne
	private TblAccount account;
	
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
