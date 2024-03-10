package com.futurix.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.futurix.entities.TblAccount;
import com.futurix.entities.TblCurrent_Account;
import com.futurix.repositories.AccountRepo;
import com.futurix.repositories.CurrentAccountRepo;

@Service
public class CurrentAccountService {
	
	@Autowired
	private CurrentAccountRepo currentAccountRepo;
	
	@Autowired
	private AccountRepo accountRepo;
	
	// Get One Current Account
	public TblCurrent_Account retrieveCurrentAccount(long accountId) {
		TblAccount tblAccount = accountRepo.findById(accountId).get();
		TblCurrent_Account current_Account = tblAccount.getCurrent_Account();
		return current_Account;
	}
	
	// Get All Current Accounts
	public List<TblCurrent_Account> getAllCurrentAccount() {
		return currentAccountRepo.findAll();
	}
	
	// Add Current Account
	public void addCurrentAccount(long accountId, TblCurrent_Account current_Account) {
		
		TblAccount tblAccount = accountRepo.findById(accountId).get();
		tblAccount.setCurrent_Account(current_Account);
		
		accountRepo.save(tblAccount);
		current_Account.setAccount(tblAccount);
		currentAccountRepo.save(current_Account);
	}
	
	// Delete Savings Account
	public void deleteCurrentAccount(Long accountId) {
		
		TblAccount tblAccount = accountRepo.findById(accountId).get();
		TblCurrent_Account  current_Account = tblAccount.getCurrent_Account();
		
		currentAccountRepo.delete(current_Account);
		tblAccount.setSaving_account(null);
		accountRepo.save(tblAccount);
	
	}
	
	// Update Savings Account
	public void updateCurrentAccount(long accountId, TblCurrent_Account current_Account) {	
		TblAccount tblAccount = accountRepo.findById(accountId).get();
		TblCurrent_Account current_Account2 = tblAccount.getCurrent_Account();		
		current_Account2 = current_Account;
		tblAccount.setCurrent_Account(current_Account2);
		accountRepo.save(tblAccount);
		currentAccountRepo.save(current_Account2);
	
	}
}
