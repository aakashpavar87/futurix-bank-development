
package com.futurix.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;

@Entity
public class TblDebitCard {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;

	private double Charges;
	private double WithdrawLimit;
	
	@Column(nullable = false)
	private String pin;

	@OneToOne(cascade = CascadeType.ALL)
	@JsonIgnore
	private TblCard card;

	public TblDebitCard(double charges, double withdrawLimit) {
		super();
		Charges = charges;
		WithdrawLimit = withdrawLimit;
	}

	public TblDebitCard() {
		super();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public TblCard getCard() {
		return card;
	}

	public void setCard(TblCard card) {
		this.card = card;
	}

	public double getCharges() {
		return Charges;
	}

	public void setCharges(double charges) {
		Charges = charges;
	}

	public double getWithdrawLimit() {
		return WithdrawLimit;
	}

	public void setWithdrawLimit(double withdrawLimit) {
		WithdrawLimit = withdrawLimit;
	}

	public String getPin() {
		return pin;
	}

	public void setPin(String pin) {
		this.pin = pin;
	}
}
