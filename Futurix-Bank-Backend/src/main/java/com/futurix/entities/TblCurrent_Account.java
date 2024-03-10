package com.futurix.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;

@Entity
public class TblCurrent_Account {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long account_number;
	
	@Column(nullable = false)
	private Double overdraft_limit;
	
	@Column(nullable = false)
	private String overdraft_status;
	
	private Double charges;
	
	@OneToOne
	private TblAccount account;
	
	public TblCurrent_Account(Long account_number, Double overdraft_limit, String overdraft_status, Double charges) {
		super();
		this.account_number = account_number;
		this.overdraft_limit = overdraft_limit;
		this.overdraft_status = overdraft_status;
		this.charges = charges;
	}
	
	public Long getAccount_number() {
		return account_number;
	}
	
	public void setAccount_number(Long account_number) {
		this.account_number = account_number;
	}
	
	public Double getOverdraft_limit() {
		return overdraft_limit;
	}
	
	public void setOverdraft_limit(Double overdraft_limit) {
		this.overdraft_limit = overdraft_limit;
	}
	
	public String getOverdraft_status() {
		return overdraft_status;
	}
	
	public void setOverdraft_status(String overdraft_status) {
		this.overdraft_status = overdraft_status;
	}
	
	public Double getCharges() {
		return charges;
	}
	
	public TblAccount getAccount() {
		return account;
	}

	public void setAccount(TblAccount account) {
		this.account = account;
	}

	public void setCharges(Double charges) {
		this.charges = charges;
	}
	
		
}
