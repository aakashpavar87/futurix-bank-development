package com.futurix.entities;

import java.math.BigDecimal;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "bank_balance")
public class TblBankBalance {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(
    		name = "total_balance", 
    		nullable = false, 
    		precision = 15, 
    		scale = 2, 
    		columnDefinition = "DECIMAL(15, 2) DEFAULT '0.00'"
    		)
    private BigDecimal totalBalance;  

    @OneToOne(cascade = CascadeType.ALL)
    private TblTransaction transaction;
    
	public TblBankBalance() {
		super();
	}

	public TblBankBalance(Long id, BigDecimal totalBalance) {
		super();
		this.id = id;
		this.totalBalance = totalBalance;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public BigDecimal getTotalBalance() {
		return totalBalance;
	}

	public void setTotalBalance(BigDecimal totalBalance) {
		this.totalBalance = totalBalance;
	}

	public TblTransaction getTransaction() {
		return transaction;
	}

	public void setTransaction(TblTransaction transaction) {
		this.transaction = transaction;
	}

}
