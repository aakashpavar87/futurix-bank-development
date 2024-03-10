
package com.futurix.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "tblCreditCard")
public class TblCreditCard {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
	
	@Column(nullable = false)
    private String cardType;
	
	@Column(nullable = false)
    private Double creditLimit;
	
	
    private String statementPeriod;
    
    private Double charges;
    
    @OneToOne
    @JsonIgnore
    private TblCard card;

	public TblCreditCard(int id, String cardType, Double creditLimit, String statementPeriod, Double charges) {
		super();
		this.id = id;
		this.cardType = cardType;
		this.creditLimit = creditLimit;
		this.statementPeriod = statementPeriod;
		this.charges = charges;
	}

	public TblCreditCard() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCardType() {
		return cardType;
	}

	public void setCardType(String cardType) {
		this.cardType = cardType;
	}

	public Double getCreditLimit() {
		return creditLimit;
	}

	public void setCreditLimit(Double creditLimit) {
		this.creditLimit = creditLimit;
	}

	public String getStatementPeriod() {
		return statementPeriod;
	}

	public void setStatementPeriod(String statementPeriod) {
		this.statementPeriod = statementPeriod;
	}

	public Double getCharges() {
		return charges;
	}

	public void setCharges(Double charges) {
		this.charges = charges;
	}

	public TblCard getCard() {
		return card;
	}

	public void setCard(TblCard card) {
		this.card = card;
	}



}


