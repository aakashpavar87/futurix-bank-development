package com.futurix.entities;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "tblAccount")
public class TblAccount {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long accountnumber;
		
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
	
	@OneToOne
	private TblCustomer customer;
	
	@OneToOne
	private TblSaving_account saving_account;
	
	@OneToOne
	private TblCurrent_Account current_Account;
	
	@OneToMany(mappedBy = "account", fetch = FetchType.LAZY)
	private List<TblTransaction> transactionList = new ArrayList<>();

	public List<TblTransaction> getTransactionList() {
		return transactionList;
	}

	public void setTransactionList(List<TblTransaction> transactionList) {
		this.transactionList = transactionList;
	}

	public TblAccount(Long accountnumber, String account_type, Double balance, String status,
			LocalDate dateofopening, LocalDate lastactivitydate) {
		super();
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

	public TblCustomer getCustomer() {
		return customer;
	}

	public void setCustomer(TblCustomer customer) {
		this.customer = customer;
	}

	public TblSaving_account getSaving_account() {
		return saving_account;
	}

	public void setSaving_account(TblSaving_account saving_account) {
		this.saving_account = saving_account;
	}

	public TblCurrent_Account getCurrent_Account() {
		return current_Account;
	}

	public void setCurrent_Account(TblCurrent_Account current_Account) {
		this.current_Account = current_Account;
	}

}
