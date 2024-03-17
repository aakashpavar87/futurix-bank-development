package com.futurix.entities;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class TblTransaction {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	@Column(nullable = false)
	private String transactionCode;
	
	@Column(nullable = false)
	private long accountNumber;

	@Column(nullable = false)
	private String transactionType;

	private Double amount;

	private LocalDate date;

	private Long receiverAccountNumber;

	private String description;
	
	@Column(nullable = false)
	private String status;

	private int transactionLimit;
	
	@ManyToOne
	@JsonIgnore
	private TblAccount account;

	public TblTransaction() {
		super();
		// TODO Auto-generated constructor stub
	}

	public TblTransaction(int id, int accountNumber, String transactionType, Double amount,
			 Long receiverAccountNumber, String description, String status, int transactionLimit) {
		super();
		this.id = id;
		this.accountNumber = accountNumber;
		this.transactionType = transactionType;
		this.amount = amount;
		this.receiverAccountNumber = receiverAccountNumber;
		this.description = description;
		this.status = status;
		this.transactionLimit = transactionLimit;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public long getAccountNumber() {
		return accountNumber;
	}

	public void setAccountNumber(long accountNumber) {
		this.accountNumber = accountNumber;
	}

	public String getTransactionType() {
		return transactionType;
	}

	public void setTransactionType(String transactionType) {
		this.transactionType = transactionType;
	}

	public Double getAmount() {
		return amount;
	}

	public void setAmount(Double amount) {
		this.amount = amount;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public Long getReceiverAccountNumber() {
		return receiverAccountNumber;
	}

	public void setReceiverAccountNumber(Long receiverAccountNumber) {
		this.receiverAccountNumber = receiverAccountNumber;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public int getTransactionLimit() {
		return transactionLimit;
	}

	public void setTransactionLimit(int transactionLimit) {
		this.transactionLimit = transactionLimit;
	}

	public TblAccount getAccount() {
		return account;
	}

	public void setAccount(TblAccount account) {
		this.account = account;
	}

	public String getTransactionCode() {
		return transactionCode;
	}

	public void setTransactionCode(String transactionCode) {
		this.transactionCode = transactionCode;
	}

}
