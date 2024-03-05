package com.futurix.entities;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;

@Entity
public class TblCard {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long card_number;
	
	private Long accountnumber;
	private String card_status;
	private Date date_of_issue;
	private Date expiryDate;
	private int pin;
		
	@OneToOne
	private TblCreditCard creditCard;
	
	@OneToOne
	private TblDebitCard debitCard;
	
	
	public TblCard(Long card_number, Long accountnumber, String card_status, Date date_of_issue,
			Date date_of_exspiry, int pin) {
		super();

		this.card_number = card_number;
		this.accountnumber = accountnumber;
		this.card_status = card_status;

		this.date_of_issue = date_of_issue;
		this.expiryDate = date_of_exspiry;
		this.pin = pin;
		
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
	
	public int getPin() {
		return pin;
	}
	
	public void setPin(int pin) {
		this.pin = pin;
	}
	
}
