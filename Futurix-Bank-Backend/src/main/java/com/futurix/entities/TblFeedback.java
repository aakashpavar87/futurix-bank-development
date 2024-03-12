
package com.futurix.entities;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class TblFeedback {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;

	private String emailId;

	private Long message;
	
	private LocalDateTime timestamp;

	@ManyToOne
	private TblCustomer customer;

	public TblFeedback(Long message) {
		super();
		this.message = message;
	}

	public TblFeedback() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getId() {
		return id;
	}

	public TblCustomer getCustomer() {
		return customer;
	}

	public void setCustomer(TblCustomer customer) {
		this.customer = customer;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public Long getMessage() {
		return message;
	}

	public void setMessage(Long message) {
		this.message = message;
	}
	
	public LocalDateTime getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(LocalDateTime timestamp) {
		this.timestamp = timestamp;
	}
}
