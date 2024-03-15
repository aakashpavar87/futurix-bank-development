package com.futurix.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;

@Entity
public class TblAddress {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int addressId;
	
	
	@Column(nullable = false)
	private String Street;
	@Column(nullable = false)
	private String City;
	@Column(nullable = false)
	private String State;
	@Column(nullable = false)
	private String Country;
	@Column(nullable = false)
	private String Zipcode;
	
	@OneToOne
	@JsonIgnore
	private TblCustomer customer;

	public TblAddress() {
		
	}
	
	public TblAddress(String street, String city, String state, String country, String zipcode) {
		super();
		Street = street;
		City = city;
		State = state;
		Country = country;
		Zipcode = zipcode;
	}
	
	public String getStreet() {
		return Street;
	}
	
	public void setStreet(String street) {
		Street = street;
	}
	
	public String getCity() {
		return City;
	}
	
	public void setCity(String city) {
		City = city;
	}
	
	public String getState() {
		return State;
	}
	
	public void setState(String state) {
		State = state;
	}
	
	public String getCountry() {
		return Country;
	}
	
	public void setCountry(String country) {
		Country = country;
	}
	
	public String getZipcode() {
		return Zipcode;
	}
	
	public void setZipcode(String zipcode) {
		Zipcode = zipcode;
	}

	public TblCustomer getCustomer() {
		return customer;
	}

	public void setCustomer(TblCustomer customer) {
		this.customer = customer;
	}

	public int getAddressId() {
		return addressId;
	}

	public void setAddressId(int addressId) {
		this.addressId = addressId;
	}
	
}
