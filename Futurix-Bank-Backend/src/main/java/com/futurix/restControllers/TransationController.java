package com.futurix.restControllers;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

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
	
	@PostMapping("/account/{accountId}/transaction")
	public ResponseEntity<TblTransaction> addTransaction(@PathVariable int accountId, @RequestBody TblTransaction transaction)	{
		transactionService.addTransaction(accountId, transaction);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest()
					.path("/{id}")
					.buildAndExpand(transaction.getId())
					.toUri();
		return ResponseEntity.created(location ).build();
	}
}
