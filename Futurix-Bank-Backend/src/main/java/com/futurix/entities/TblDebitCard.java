
package com.futurix.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;

@Entity
public class TblDebitCard {
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

		@Id
		@GeneratedValue(strategy = GenerationType.AUTO)
		private int id;

	    
	    private String CardType;
		private double Charges;
		private double WithdrawLimit;
		
		
		@OneToOne
		@JsonIgnore
		private TblCard card;

		public TblDebitCard(String cardType, double charges, double withdrawLimit) {
			super();
			CardType = cardType;
			Charges = charges;
			WithdrawLimit = withdrawLimit;
		}

		public TblDebitCard() {
			super();
		}

		public String getCardType() {
			return CardType;
		}

		public void setCardType(String cardType) {
			CardType = cardType;
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
}
