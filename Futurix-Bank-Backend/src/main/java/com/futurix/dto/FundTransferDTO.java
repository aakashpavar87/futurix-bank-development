package com.futurix.dto;

public class FundTransferDTO {
	private long accountNumber;
	private int amount;
	private String desc;
	
	
	public FundTransferDTO(long accountNumber, int amount, String desc) {
		super();
		this.accountNumber = accountNumber;
		this.amount = amount;
		this.desc = desc;
	}
	
	public long getAccountNumber() {
		return accountNumber;
	}
	public void setAccountNumber(long accountNumber) {
		this.accountNumber = accountNumber;
	}
	public int getAmount() {
		return amount;
	}
	public void setAmount(int amount) {
		this.amount = amount;
	}
	public String getDesc() {
		return desc;
	}
	public void setDesc(String desc) {
		this.desc = desc;
	}
	
	
}
