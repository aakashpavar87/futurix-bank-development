

package com.futurix.entities;

import java.util.Date;

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
	    private Integer feedbackId;

	    private Integer feedbackType;
	    private Double customerId;

	    private Date emailId;

	    private Long message;
	    
	    @ManyToOne
	    private TblCustomer customer;


		public TblFeedback(int id, Integer feedbackId, Integer feedbackType, Double customerId, Date emailId,
				Long message) {
			super();
			this.id = id;
			this.feedbackId = feedbackId;
			this.feedbackType = feedbackType;
			this.customerId = customerId;
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

		public void setId(int id) {
			this.id = id;
		}

		public Integer getFeedbackId() {
			return feedbackId;
		}

		public void setFeedbackId(Integer feedbackId) {
			this.feedbackId = feedbackId;
		}

		public Integer getFeedbackType() {
			return feedbackType;
		}

		public void setFeedbackType(Integer feedbackType) {
			this.feedbackType = feedbackType;
		}

		public Double getCustomerId() {
			return customerId;
		}

		public void setCustomerId(Double customerId) {
			this.customerId = customerId;
		}

		public Date getEmailId() {
			return emailId;
		}

		public void setEmailId(Date emailId) {
			this.emailId = emailId;
		}

		public Long getMessage() {
			return message;
		}

		public void setMessage(Long message) {
			this.message = message;
		}


}

