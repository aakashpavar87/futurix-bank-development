package com.futurix.services;

import java.time.LocalDate;
import java.util.List;
import java.util.UUID;
import java.util.function.Predicate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.futurix.entities.TblAccount;
import com.futurix.entities.TblInvestment;
import com.futurix.entities.TblTransaction;
import com.futurix.repositories.AccountRepo;
import com.futurix.repositories.TransactionRepo;

@Service
public class TransactionService {
	@Autowired
	private TransactionRepo transactionRepo;

	@Autowired
	private AccountRepo accountRepo;

	public TblTransaction addTransaction(TblAccount tblAccount, String transactionType, String desc, int amount, long receiverAccountNumber) {
		List<TblTransaction> transactionList = tblAccount.getTransactionList();

		TblTransaction transaction = new TblTransaction();
		transaction.setAccount(tblAccount);
		transaction.setTransactionType(transactionType);
		if(tblAccount.getAccountType().equalsIgnoreCase("savings")) {
			transaction.setTransactionLimit(5);			
		}else {
			transaction.setTransactionLimit(50);	
		}
		if(transactionType.equalsIgnoreCase("money recieve") || transactionType.equalsIgnoreCase("money send")) {
			transaction.setReceiverAccountNumber(receiverAccountNumber);
		}
		String transactionCode = UUID.randomUUID().toString().split("-")[0];
		transaction.setTransactionCode(transactionCode);
		transaction.setDate(LocalDate.now());
		transaction.setAccountNumber(tblAccount.getAccountnumber());
		transaction.setDescription(desc);
		transaction.setStatus("Completed");
		transaction.setAmount((double) amount);
		transactionList.add(transaction);
		tblAccount.setTransactionList(transactionList);

//		accountRepo.save(tblAccount);
		return transactionRepo.save(transaction);

	}
	
	public TblTransaction addInvesmentTransaction(TblInvestment investment, String desc, int amount) {
		TblTransaction transaction = new TblTransaction();
		
		transaction.setTransactionType("investment");
		transaction.setInvestment(investment);
		transaction.setDescription(desc);
		transaction.setAmount((double) amount);
		String transactionCode = UUID.randomUUID().toString().split("-")[0];
		transaction.setTransactionCode(transactionCode);
		transaction.setDate(LocalDate.now());
		transaction.setStatus("Completed");
		
		return transactionRepo.save(transaction);

	}
	

	public TblTransaction getOneTransaction(int accId, int id) {

		TblAccount foundAccount = accountRepo.findById(accId).get();
		List<TblTransaction> foundTransactionList = foundAccount.getTransactionList();

		Predicate<? super TblTransaction> predicate = transaction -> transaction.getId() == id;
		return foundTransactionList.stream().filter(predicate).findFirst().get();
	}

	public List<TblTransaction> getAllTransactionsOfAccount(int accountNumber) {
		return accountRepo.findById(accountNumber).get().getTransactionList();
	}

}
