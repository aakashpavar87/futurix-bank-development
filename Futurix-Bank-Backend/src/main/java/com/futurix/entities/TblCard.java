package com.futurix.entities;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;

@Entity
public class TblCard {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long card_number;
	
	private String email;
	private long accountnumber;
	private String card_status;
	private LocalDate date_of_issue;
	private LocalDate expiryDate;
		
	@OneToOne(cascade = CascadeType.ALL)
	private TblCreditCard creditCard;
	
	@OneToOne(cascade = CascadeType.ALL)
	private TblDebitCard debitCard;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JsonIgnore
	private TblCustomer customer;
		
	public TblCard(String card_status, String cardType , LocalDate date_of_issue,
			LocalDate date_of_exspiry) {
	
		super();
		this.card_status = card_status;
		this.date_of_issue = date_of_issue;
		this.expiryDate = date_of_exspiry;
		
	}
	
	
	
	public TblCard() {
		super();
		// TODO Auto-generated constructor stub
	}



	public Long getCard_number() {
		return card_number;
	}
	
	public void setCard_number(Long card_number) {
		this.card_number = card_number;
	}
	
	public long getAccountnumber() {
		return accountnumber;
	}
	
	public void setAccountnumber(long accountnumber) {
		this.accountnumber = accountnumber;
	}
	
	public String getCard_status() {
		return card_status;
	}
	
	public void setCard_status(String card_status) {
		this.card_status = card_status;
	}
	
	public LocalDate getDate_of_issue() {
		return date_of_issue;
	}
	
	public void setDate_of_issue(LocalDate date_of_issue) {
		this.date_of_issue = date_of_issue;
	}
	
	public LocalDate getDate_of_exspiry() {
		return expiryDate;
	}
	
	public void setDate_of_exspiry(LocalDate date_of_exspiry) {
		this.expiryDate = date_of_exspiry;
	}

	public LocalDate getExpiryDate() {
		return expiryDate;
	}

	public void setExpiryDate(LocalDate expiryDate) {
		this.expiryDate = expiryDate;
	}

	public TblCreditCard getCreditCard() {
		return creditCard;
	}

	public void setCreditCard(TblCreditCard creditCard) {
		this.creditCard = creditCard;
	}

	public TblDebitCard getDebitCard() {
		return debitCard;
	}

	public void setDebitCard(TblDebitCard debitCard) {
		this.debitCard = debitCard;
	}

	public TblCustomer getCustomer() {
		return customer;
	}

	public void setCustomer(TblCustomer customer) {
		this.customer = customer;
	}
	
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

}
