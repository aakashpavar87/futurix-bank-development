package com.futurix.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.futurix.entities.TblAccount;
import com.futurix.entities.TblCustomer;
import com.futurix.repositories.AccountRepo;
import com.futurix.repositories.CustomerRepo;

@Service
public class AccountService {
	@Autowired
	private AccountRepo accountRepo;
	@Autowired
	private CustomerRepo customerRepo;
	
	//	Create Account
	public void createAccount(TblAccount account , int id) {

		accountRepo.save(account);
		TblCustomer foundCustomer =  customerRepo.findById(id).orElse(null);
		
		foundCustomer.setAccount(account);
		customerRepo.save(foundCustomer);
		
		account.setCustomer(foundCustomer);
		accountRepo.save(account);
		
	}
	
	//	Select all Account
	public List<TblAccount> retreiveAllAccount(){
		return accountRepo.findAll();	
	}
	
	
	//	Select one account
	public TblAccount findAccount(int id) {
		TblCustomer foundCustomer = customerRepo.findById(id).orElse(null);
		TblAccount foundAccount =  foundCustomer.getAccount();		
		return foundAccount;
	}
	
	
	//	Delete Account 
	public void deleteAccount(int  id) {
   TblCustomer foundCustomer =  customerRepo.findById(id).orElse(null);
	TblAccount foundAccount = foundCustomer.getAccount();
	accountRepo.delete(foundAccount);
	}
	
	//	Update Account
	public void updateAccount(int id ,  TblAccount account) {
		TblCustomer foundCustomer = customerRepo.findById(id).get();
		TblAccount foundAccount = foundCustomer.getAccount();
		foundAccount =  account;
		accountRepo.save(foundAccount);
	}
	
	
	
}
