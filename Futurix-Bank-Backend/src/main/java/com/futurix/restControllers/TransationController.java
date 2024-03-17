package com.futurix.restControllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.futurix.entities.TblTransaction;
import com.futurix.services.TransactionService;

@RestController
public class TransationController {
	@Autowired
	private TransactionService transactionService;
	
	@GetMapping("/account/{accountId}/transaction")
	public List<TblTransaction> retrieveAllTransationOfAccount(@PathVariable int accountId) {
		return transactionService.getAllTransactionsOfAccount(accountId);
	}
	
	@GetMapping("/account/{accountId}/transaction/{transactionId}")
	public TblTransaction retrieveOneTransactionOfAccount(@PathVariable int accountId, int transactionId) {
		return transactionService.getOneTransaction(accountId, transactionId);
	}
}
