package com.futurix.entities;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "tblAccount")
public class TblAccount {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long accountnumber;
	@Column(nullable = false)
	private String customer_id;
	@Column(nullable = false)
	private String account_type;
	@Column(nullable = false)
	private Double balance;
	@Column(nullable = false)
	private String status;
	@Column(nullable = false)
	private LocalDate dateofopening;
	@Column(nullable = false)
	private LocalDate lastactivitydate;

	public TblAccount(Long accountnumber, String customer_id, String account_type, Double balance, String status,
			LocalDate dateofopening, LocalDate lastactivitydate) {
		super();
		this.customer_id = customer_id;
		this.accountnumber = accountnumber;
		this.account_type = account_type;
		this.balance = balance;
		this.status = status;
		this.dateofopening = dateofopening;
		this.lastactivitydate = lastactivitydate;
	}

	public Long getAccountnumber() {
		return accountnumber;
	}

	public void setAccountnumber(Long accountnumber) {
		this.accountnumber = accountnumber;
	}

	public String getCustomer_id() {
		return customer_id;
	}

	public void setCustomer_id(String customer_id) {
		this.customer_id = customer_id;
	}

	public String getAccount_type() {
		return account_type;
	}

	public void setAccount_type(String account_type) {
		this.account_type = account_type;
	}

	public Double getBalance() {
		return balance;
	}

	public void setBalance(Double balance) {
		this.balance = balance;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public LocalDate getDateofopening() {
		return dateofopening;
	}

	public void setDateofopening(LocalDate dateofopening) {
		this.dateofopening = dateofopening;
	}

	public LocalDate getLastactivitydate() {
		return lastactivitydate;
	}

	public void setLastactivitydate(LocalDate lastactivitydate) {
		this.lastactivitydate = lastactivitydate;
	}

}
