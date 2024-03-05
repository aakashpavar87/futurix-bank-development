package com.futurix.entities;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class TblInvestor {

		@Id
		@GeneratedValue(strategy = GenerationType.AUTO)
		private int id;

		private Integer investorId;

	    private String investorName;

	    private String investorAddress;

	    private String investorGender;

	    private Long investorPhoneNumber;

	    private String investorEmail;

	    private Date investorDob;

	    private String investorPassword;
		
	    private Integer adminId;
	    
	    @OneToMany(mappedBy = "investor", fetch = FetchType.LAZY)
	    private List<TblInvestment> investmentList = new ArrayList<>();

		public TblInvestor(Integer adminId, Integer investorId, String investorName, String investorAddress,
				String investorGender, Long investorPhoneNumber, String investorEmail, Date investorDob,
				String investorPassword) {
			super();
			this.adminId = adminId;
			this.investorId = investorId;
			this.investorName = investorName;
			this.investorAddress = investorAddress;
			this.investorGender = investorGender;
			this.investorPhoneNumber = investorPhoneNumber;
			this.investorEmail = investorEmail;
			this.investorDob = investorDob;
			this.investorPassword = investorPassword;
		}

		public TblInvestor() {
			super();
			// TODO Auto-generated constructor stub
		}

		public Integer getAdminId() {
			return adminId;
		}

		public void setAdminId(Integer adminId) {
			this.adminId = adminId;
		}

		public Integer getInvestorId() {
			return investorId;
		}

		public void setInvestorId(Integer investorId) {
			this.investorId = investorId;
		}

		public String getInvestorName() {
			return investorName;
		}

		public void setInvestorName(String investorName) {
			this.investorName = investorName;
		}

		public String getInvestorAddress() {
			return investorAddress;
		}

		public void setInvestorAddress(String investorAddress) {
			this.investorAddress = investorAddress;
		}

		public String getInvestorGender() {
			return investorGender;
		}

		public void setInvestorGender(String investorGender) {
			this.investorGender = investorGender;
		}

		public Long getInvestorPhoneNumber() {
			return investorPhoneNumber;
		}

		public void setInvestorPhoneNumber(Long investorPhoneNumber) {
			this.investorPhoneNumber = investorPhoneNumber;
		}

		public String getInvestorEmail() {
			return investorEmail;
		}

		public void setInvestorEmail(String investorEmail) {
			this.investorEmail = investorEmail;
		}

		public Date getInvestorDob() {
			return investorDob;
		}

		public void setInvestorDob(Date investorDob) {
			this.investorDob = investorDob;
		}

		public String getInvestorPassword() {
			return investorPassword;
		}

		public void setInvestorPassword(String investorPassword) {
			this.investorPassword = investorPassword;
		}

		public int getId() {
			return id;
		}

		public void setId(int id) {
			this.id = id;
		}

		public List<TblInvestment> getInvestmentList() {
			return investmentList;
		}

		public void setInvestmentList(List<TblInvestment> investmentList) {
			this.investmentList = investmentList;
		}



}
