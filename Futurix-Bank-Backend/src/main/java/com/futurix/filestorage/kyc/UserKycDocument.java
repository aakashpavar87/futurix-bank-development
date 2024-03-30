package com.futurix.filestorage.kyc;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.futurix.entities.TblCustomer;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserKycDocument {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(nullable = false)
	private String aadharCardFileName;
	
	private String panCardFileName;
	
	@Column(nullable = false)
	private String aadharCardFileType;
	
	private String panCardFileType; 
	
	@Column(nullable = false)
	private String aadharCardFilePath;
	
	private String panCardFilePath;
	
	@Column(nullable = false)
	private String aadharCardNumber;
	
	@Column(nullable = false)
	private String panCardNumber;
	
	@OneToOne
	@JsonIgnore
	private TblCustomer customer;
	
}
