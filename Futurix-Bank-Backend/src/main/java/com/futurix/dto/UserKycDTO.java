package com.futurix.dto;

import org.springframework.web.multipart.MultipartFile;

public class UserKycDTO {
	
	private String aadharCardNumber;
	private String panCardNumber;
	private MultipartFile aadharCard;
	private MultipartFile panCard;
	
	
	public UserKycDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public UserKycDTO(String aadharCardNumber, String panCardNumber, MultipartFile aadharCard, MultipartFile panCard) {
		super();
		this.aadharCardNumber = aadharCardNumber;
		this.panCardNumber = panCardNumber;
		this.aadharCard = aadharCard;
		this.panCard = panCard;
	}
	
	public String getAadharCardNumber() {
		return aadharCardNumber;
	}
	public void setAadharCardNumber(String aadharCardNumber) {
		this.aadharCardNumber = aadharCardNumber;
	}
	public String getPanCardNumber() {
		return panCardNumber;
	}
	public void setPanCardNumber(String panCardNumber) {
		this.panCardNumber = panCardNumber;
	}
	public MultipartFile getAadharCard() {
		return aadharCard;
	}
	public void setAadharCard(MultipartFile aadharCard) {
		this.aadharCard = aadharCard;
	}
	public MultipartFile getPanCard() {
		return panCard;
	}
	public void setPanCard(MultipartFile panCard) {
		this.panCard = panCard;
	}
	
	
}
