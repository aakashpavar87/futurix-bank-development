package com.futurix.entities;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import com.futurix.filestorage.ProfileImageData;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;

@Entity
public class TblInvestor {

		@Id
		@GeneratedValue(strategy = GenerationType.AUTO)
		private int id;

	    private String investorName;

	    private String investorAddress;

	    private String investorGender;

	    private Long investorPhoneNumber;

	    private String investorEmail;

	    private LocalDate investorDob;

	    private String investorPassword;
	    
	    @OneToOne(cascade = CascadeType.ALL)
		private ProfileImageData profileImage;
			    
	    @OneToMany(mappedBy = "investor", fetch = FetchType.LAZY)
	    private List<TblInvestment> investmentList = new ArrayList<>();

		public TblInvestor(String investorName, String investorAddress,
				String investorGender, Long investorPhoneNumber, String investorEmail, LocalDate investorDob,
				String investorPassword) {
			super();
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

		public LocalDate getInvestorDob() {
			return investorDob;
		}

		public void setInvestorDob(LocalDate investorDob) {
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

		public ProfileImageData getProfileImage() {
			return profileImage;
		}

		public void setProfileImage(ProfileImageData profileImage) {
			this.profileImage = profileImage;
		}
}
