package com.futurix.entities;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class TblInvestment {

	 @Id
	    @GeneratedValue(strategy = GenerationType.AUTO)
	    private Integer investorId;

	    private Integer investmentId;

	    private Double investmentAmount;

	    private Date investmentDate;

	    private Long investorPhoneNumber;

	    private String investmentType;
	    
	    @ManyToOne
	    private TblInvestor investor;

		public TblInvestment(Integer investorId, Integer investmentId, Double investmentAmount, Date investmentDate,
				Long investorPhoneNumber, String investmentType) {
			super();
			this.investorId = investorId;
			this.investmentId = investmentId;
			this.investmentAmount = investmentAmount;
			this.investmentDate = investmentDate;
			this.investorPhoneNumber = investorPhoneNumber;
			this.investmentType = investmentType;
		}

		public TblInvestment() {
			super();
		}

		public Integer getInvestorId() {
			return investorId;
		}

		public void setInvestorId(Integer investorId) {
			this.investorId = investorId;
		}

		public Integer getInvestmentId() {
			return investmentId;
		}

		public void setInvestmentId(Integer investmentId) {
			this.investmentId = investmentId;
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

		public void setInvestor(TblInvestor investor) {
			this.investor = investor;
		}


}
