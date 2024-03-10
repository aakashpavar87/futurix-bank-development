
package com.futurix.entities;

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

	private Integer feedbackType;

	private String emailId;

	private Long message;

	@ManyToOne
	private TblCustomer customer;

	public TblFeedback(int id, Integer feedbackType, String emailId, Long message) {
		super();
		this.id = id;
		this.feedbackType = feedbackType;
		this.emailId = emailId;
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

	public Integer getFeedbackType() {
		return feedbackType;
	}

	public void setFeedbackType(Integer feedbackType) {
		this.feedbackType = feedbackType;
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

}
