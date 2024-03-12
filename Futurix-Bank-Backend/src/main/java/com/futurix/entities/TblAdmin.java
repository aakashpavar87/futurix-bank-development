package com.futurix.entities;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class TblAdmin {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;

	@Column(nullable = false)
	private String adminName;

	@Column(nullable = false)
	private String adminAddress;

	@Column(nullable = false)
	private String adminGender;

	@Column(nullable = false)
	private Long adminPhoneNumber;

	@Column(nullable = false)
	private String adminEmail;

	@Column(nullable = false)
	private Date adminDob;

	@Column(nullable = false)
	private String adminPassword;

	
	public TblAdmin(String adminName, String adminAddress, String adminGender, Long adminPhoneNumber,
			String adminEmail, Date adminDob, String adminPassword) {
		super();
		this.adminName = adminName;
		this.adminAddress = adminAddress;
		this.adminGender = adminGender;
		this.adminPhoneNumber = adminPhoneNumber;
		this.adminEmail = adminEmail;
		this.adminDob = adminDob;
		this.adminPassword = adminPassword;
	}

	public TblAdmin() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getAdminName() {
		return adminName;
	}

	public void setAdminName(String adminName) {
		this.adminName = adminName;
	}

	public String getAdminAddress() {
		return adminAddress;
	}

	public void setAdminAddress(String adminAddress) {
		this.adminAddress = adminAddress;
	}

	public String getAdminGender() {
		return adminGender;
	}

	public void setAdminGender(String adminGender) {
		this.adminGender = adminGender;
	}

	public Long getAdminPhoneNumber() {
		return adminPhoneNumber;
	}

	public void setAdminPhoneNumber(Long adminPhoneNumber) {
		this.adminPhoneNumber = adminPhoneNumber;
	}

	public String getAdminEmail() {
		return adminEmail;
	}

	public void setAdminEmail(String adminEmail) {
		this.adminEmail = adminEmail;
	}

	public Date getAdminDob() {
		return adminDob;
	}

	public void setAdminDob(Date adminDob) {
		this.adminDob = adminDob;
	}

	public String getAdminPassword() {
		return adminPassword;
	}

	public void setAdminPassword(String adminPassword) {
		this.adminPassword = adminPassword;
	}

}
