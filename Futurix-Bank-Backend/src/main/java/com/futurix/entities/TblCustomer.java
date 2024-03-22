package com.futurix.entities;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import com.futurix.filestorage.ProfileImageData;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;

@Entity
public class TblCustomer {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;

	@Column(nullable = false)
	private String name;
	
	@Column(nullable = false)
	private String email;
	
	@Column(nullable = false)
	private String password;
	
	@Column(nullable = false)
	private String phone;
	
	@Column(nullable = false)
	private LocalDate dob;
	
	@Column(nullable = false)
	private LocalDate dateOfOpening;
	
	@Column(nullable = false)
	private String gender;
	
	@Column(nullable = false)
	private String occupation;
	
	private Boolean active;
	
	private String otp;
	
	private LocalDateTime otpGeneratedTime;
	
	
	// Relation Ships between Entities

	@OneToOne(cascade = CascadeType.ALL)
	private TblAddress address;
	
	@OneToMany(mappedBy = "customer", fetch = FetchType.LAZY)
	private List<TblLoan> loanList = new ArrayList<>();
	
	@OneToMany(mappedBy = "customer", fetch = FetchType.LAZY)
	private List<TblFeedback> feedbackList = new ArrayList<>();
	
	@OneToMany(mappedBy = "customer", fetch = FetchType.EAGER)
	private List<TblCard> cardList = new ArrayList<>();
	
	@OneToOne(cascade = CascadeType.ALL)
	private TblAccount account;
	
	
	@OneToOne(cascade = CascadeType.ALL)
	private ProfileImageData profileImage;

	public TblCustomer() {
	}

	public TblCustomer(String name, String email, String password, String phone, LocalDate dob, String gender, String occupation) {
		super();
		this.name = name;
		this.email = email;
		this.password = password;
		this.phone = phone;
		this.dob = dob;
		this.gender = gender;
		this.occupation = occupation;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public LocalDate getDob() {
		return dob;
	}

	public void setDob(LocalDate dob) {
		this.dob = dob;
	}

	public LocalDate getDateOfOpening() {
		return dateOfOpening;
	}

	public void setDateOfOpening(LocalDate dateOfOpening) {
		this.dateOfOpening = dateOfOpening;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getOccupation() {
		return occupation;
	}

	public void setOccupation(String occupation) {
		this.occupation = occupation;
	}

	public TblAddress getAddress() {
		return address;
	}

	public void setAddress(TblAddress address) {
		this.address = address;
	}

	public List<TblLoan> getLoanList() {
		return loanList;
	}

	public Boolean getActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}

	public String getOtp() {
		return otp;
	}

	public void setOtp(String otp) {
		this.otp = otp;
	}

	public LocalDateTime getOtpGeneratedTime() {
		return otpGeneratedTime;
	}

	public void setOtpGeneratedTime(LocalDateTime otpGeneratedTime) {
		this.otpGeneratedTime = otpGeneratedTime;
	}

	public ProfileImageData getProfileImage() {
		return profileImage;
	}

	public void setProfileImage(ProfileImageData profileImage) {
		this.profileImage = profileImage;
	}

	public void setActive(Boolean active) {
		this.active = active;
	}

	public void setLoanList(List<TblLoan> loanList) {
		this.loanList = loanList;
	}

	public List<TblFeedback> getFeedbackList() {
		return feedbackList;
	}

	public void setFeedbackList(List<TblFeedback> feedbackList) {
		this.feedbackList = feedbackList;
	}

	public List<TblCard> getCardList() {
		return cardList;
	}

	public void setCardList(List<TblCard> cardList) {
		this.cardList = cardList;
	}

	public TblAccount getAccount() {
		return account;
	}

	public void setAccount(TblAccount account) {
		this.account = account;
	}
}
