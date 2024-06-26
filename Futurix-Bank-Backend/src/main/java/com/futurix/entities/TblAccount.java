package com.futurix.entities;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
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
	private int id;
	
	@Column(nullable = false)
	private long accountnumber;
		
	@Column(nullable = false)
	private String accountType;
	
	@Column(nullable = false)
	private Double balance;
	
	private boolean status;
	
	@Column(nullable = false)
	private LocalDate dateofopening;
	
	@Column(nullable = false)
	private LocalDate lastactivitydate;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JsonIgnore
	private TblCustomer customer;
	
	@OneToOne(cascade = CascadeType.ALL)
	private TblSaving_account saving_account;
	
	@OneToOne(cascade = CascadeType.ALL)
	private TblCurrent_Account current_Account;
	
	@OneToMany(mappedBy = "account", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private List<TblTransaction> transactionList = new ArrayList<>();

	public List<TblTransaction> getTransactionList() {
		return transactionList;
	}

	public void setTransactionList(List<TblTransaction> transactionList) {
		this.transactionList = transactionList;
	}

	public TblAccount() {
		super();
		// TODO Auto-generated constructor stub
	}

	public TblAccount(String account_type, Double balance, Boolean status,
			LocalDate dateofopening, LocalDate lastactivitydate) {
		super();
		this.accountType = account_type;
		this.balance = balance;
		this.status = status;
		this.dateofopening = dateofopening;
		this.lastactivitydate = lastactivitydate;
	}


	public long getAccountnumber() {
		return accountnumber;
	}

	public void setAccountnumber(long accountnumber) {
		this.accountnumber = accountnumber;
	}

	public String getAccountType() {
		return accountType;
	}

	public void setAccountType(String account_type) {
		this.accountType = account_type;
	}

	public Double getBalance() {
		return balance;
	}

	public void setBalance(Double balance) {
		this.balance = balance;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public boolean getStatus() {
		return status;
	}

	public void setStatus(Boolean status) {
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
