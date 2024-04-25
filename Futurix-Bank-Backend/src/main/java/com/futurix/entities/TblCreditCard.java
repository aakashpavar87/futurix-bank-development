
package com.futurix.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
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
    private Double creditLimit;
	    
	@Column(nullable = false)
	private String pin;
    
	private Double charges;
    
    private String income;
    
    private String employment;
    
    private String creditScore;
    
    @OneToOne(cascade = CascadeType.ALL)
    @JsonIgnore
    private TblCard card;

	public TblCreditCard(Double creditLimit, Double charges) {
		super();
		this.creditLimit = creditLimit;
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

	public Double getCreditLimit() {
		return creditLimit;
	}

	public void setCreditLimit(Double creditLimit) {
		this.creditLimit = creditLimit;
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

	public String getIncome() {
		return income;
	}

	public void setIncome(String income) {
		this.income = income;
	}

	public String getEmployment() {
		return employment;
	}

	public void setEmployment(String employment) {
		this.employment = employment;
	}

	public String getCreditScore() {
		return creditScore;
	}

	public void setCreditScore(String creditScore) {
		this.creditScore = creditScore;
	}



}


