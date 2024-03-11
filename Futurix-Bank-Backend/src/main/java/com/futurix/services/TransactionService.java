package com.futurix.services;

import java.util.List;
import java.util.function.Predicate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.futurix.entities.TblAccount;
import com.futurix.entities.TblTransaction;
import com.futurix.repositories.AccountRepo;
import com.futurix.repositories.TransactionRepo;

@Service
public class TransactionService {
	@Autowired
	private TransactionRepo transactionRepo;
	
	@Autowired
	private AccountRepo accountRepo;
	
	public void addTransaction(long accountNumber,TblTransaction transaction) {
		
		TblAccount account = accountRepo.findById(accountNumber).get();
		
		account.getTransactionList().add(transaction);
		accountRepo.save(account);
		
		transaction.setAccount(account);
		transactionRepo.save(transaction);
	
	}
	
	public TblTransaction getOneTransaction(long accountNumber, int id) {
		
		TblAccount foundAccount = accountRepo.findById(accountNumber).get();
		List<TblTransaction> foundTransactionList = foundAccount.getTransactionList();
		
		Predicate<? super TblTransaction> predicate = transaction -> transaction.getTransactionId() == id;
		return foundTransactionList.stream().filter(predicate).findFirst().get();
	}
	
	public List<TblTransaction> getAllTransactionsOfAccount(long accountNumber) {
		return accountRepo.findById(accountNumber).get().getTransactionList();
	}
	
	
}
