package com.futurix.entities;

import java.sql.Date;

import com.fasterxml.jackson.annotation.JsonIgnore;

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
	private Long accountnumber;
	private String card_status;
	private Date date_of_issue;
	private Date expiryDate;
	private String cardType;
		
	@OneToOne
	private TblCreditCard creditCard;
	
	@OneToOne
	private TblDebitCard debitCard;
	
	@ManyToOne
	@JsonIgnore
	private TblCustomer customer;
		
	public TblCard(String card_status, String cardType , Date date_of_issue,
			Date date_of_exspiry) {
	
		super();
		this.card_status = card_status;
		this.cardType = cardType;
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
	
	public Long getAccountnumber() {
		return accountnumber;
	}
	
	public void setAccountnumber(Long accountnumber) {
		this.accountnumber = accountnumber;
	}
	
	public String getCard_status() {
		return card_status;
	}
	
	public void setCard_status(String card_status) {
		this.card_status = card_status;
	}
	
	public Date getDate_of_issue() {
		return date_of_issue;
	}
	
	public void setDate_of_issue(Date date_of_issue) {
		this.date_of_issue = date_of_issue;
	}
	
	public Date getDate_of_exspiry() {
		return expiryDate;
	}
	
	public void setDate_of_exspiry(Date date_of_exspiry) {
		this.expiryDate = date_of_exspiry;
	}

	public Date getExpiryDate() {
		return expiryDate;
	}

	public void setExpiryDate(Date expiryDate) {
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

	public String getCardType() {
		return cardType;
	}

	public void setCardType(String cardType) {
		this.cardType = cardType;
	}
	
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

}
