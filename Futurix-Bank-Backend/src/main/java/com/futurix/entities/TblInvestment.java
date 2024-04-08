package com.futurix.entities;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class TblInvestment {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;

	private Double investmentAmount;

	private Date investmentDate;
	
	@Column(nullable = false)
	private String investmentType;
	
	private String transactionId;

	private Long investorPhoneNumber;

	private String investmentDuration;

	
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JsonIgnore
	private TblInvestor investor;

	@Override
	public String toString() {
		return "TblInvestment [id=" + id + ", investmentAmount=" + investmentAmount + ", investmentDate="
				+ investmentDate + ", investmentType=" + investmentType + ", transactionId=" + transactionId
				+ ", investorPhoneNumber=" + investorPhoneNumber + ", investmentDuration=" + investmentDuration
				+ ", investor=" + investor + "]";
	}

	public TblInvestment(Double investmentAmount, String investmentType) {
		super();
		this.investmentAmount = investmentAmount;
		this.investmentDuration = investmentType;
	}

	public TblInvestment() {
		super();
	}

	public Integer getInvestmentId() {
		return id;
	}

	public void setInvestmentId(Integer investmentId) {
		this.id = investmentId;
	}

	public Double getInvestmentAmount() {
		return investmentAmount;
	}

	public void setInvestmentAmount(Double investmentAmount) {
		this.investmentAmount = investmentAmount;
	}

	public Date getInvestmentDate() {
		return investmentDate;
	}

	public void setInvestmentDate(Date investmentDate) {
		this.investmentDate = investmentDate;
	}

	public Long getInvestorPhoneNumber() {
		return investorPhoneNumber;
	}

	public void setInvestorPhoneNumber(Long investorPhoneNumber) {
		this.investorPhoneNumber = investorPhoneNumber;
	}

	public String getInvestmentType() {
		return investmentType;
	}

	public void setInvestmentType(String investmentType) {
		this.investmentType = investmentType;
	}

	public TblInvestor getInvestor() {
		return investor;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getInvestmentDuration() {
		return investmentDuration;
	}

	public void setInvestmentDuration(String investmentDuration) {
		this.investmentDuration = investmentDuration;
	}

	public void setInvestor(TblInvestor investor) {
		this.investor = investor;
	}

	public String getTransactionId() {
		return transactionId;
	}

	public void setTransactionId(String transactionId) {
		this.transactionId = transactionId;
	}

}
