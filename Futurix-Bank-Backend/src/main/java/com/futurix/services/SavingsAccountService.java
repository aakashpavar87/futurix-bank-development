package com.futurix.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.futurix.entities.TblAccount;
import com.futurix.entities.TblSaving_account;
import com.futurix.repositories.AccountRepo;
import com.futurix.repositories.SavingAccountRepo;

@Service
public class SavingsAccountService {
	
	@Autowired
	private SavingAccountRepo savingAccountRepo;
	
	@Autowired
	private AccountRepo accountRepo;
	
	// Get Account
	public TblSaving_account retrieveSavingAccount(long accountId) {
		TblAccount tblAccount = accountRepo.findById(accountId).get();
		TblSaving_account saving_account = tblAccount.getSaving_account();
		return saving_account;
	}
	
	// Get All Accounts
	public List<TblSaving_account> getAllSavingsAccount() {
		return savingAccountRepo.findAll();
	}
	
	// Add Savings Account
	public void addSavingAccount(long accountId, TblSaving_account saving_account) {
				
		TblAccount tblAccount = accountRepo.findById(accountId).get();
		tblAccount.setSaving_account(saving_account);
		accountRepo.save(tblAccount);
		saving_account.setAccount(tblAccount);
		savingAccountRepo.save(saving_account);

	}
	
	// Delete Savings Account
	public void deleteSavingsAccount(Long accountId) {
		
		TblAccount tblAccount = accountRepo.findById(accountId).get();
		TblSaving_account saving_account = tblAccount.getSaving_account();
		
		savingAccountRepo.delete(saving_account);
		tblAccount.setSaving_account(null);
		accountRepo.save(tblAccount);
	
	}
	
	// Update Savings Account
	public void updateSavingAccount(long accountId, TblSaving_account saving_account) {
		
		TblAccount tblAccount = accountRepo.findById(accountId).get();
		TblSaving_account saving_account2 = tblAccount.getSaving_account();		
		saving_account2 = saving_account;
		tblAccount.setSaving_account(saving_account2);
		accountRepo.save(tblAccount);
		savingAccountRepo.save(saving_account2);
	
	}
}
