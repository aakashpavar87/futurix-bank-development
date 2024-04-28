package com.futurix.restControllers;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.futurix.entities.TblSaving_account;
import com.futurix.services.SavingsAccountService;

@RestController
public class SavingsAccountController {
	
	@Autowired
	private SavingsAccountService savingsAccountService;
	
	@GetMapping("/account/{accountId}/savings")
	public TblSaving_account getSavingAccount(int accountId) {
		return savingsAccountService.retrieveSavingAccount(accountId);
	}
	
	@PostMapping("/account/{accountId}/savings")
	public ResponseEntity<TblSaving_account> createSavingsAccount(@RequestBody TblSaving_account saving_account, @PathVariable int accountId) {
		return new ResponseEntity<TblSaving_account>(savingsAccountService.addSavingAccount(accountId, saving_account), HttpStatus.OK);
	}
	
	@DeleteMapping("/account/{accountId}/savings")
	public ResponseEntity<Void> removeSavingsAccount(@PathVariable int accountId) {
		savingsAccountService.deleteSavingsAccount(accountId);
		return ResponseEntity.noContent().build();
	}
	
	@GetMapping("/account/savings")
	public List<TblSaving_account> getAllSavingsAccounts() {
		return savingsAccountService.getAllSavingsAccount();
	}
	
	@PutMapping("/account/{accountId}/savings")
	public ResponseEntity<TblSaving_account> updateSavingsAccount(@PathVariable int accountId, 
			@RequestBody TblSaving_account saving_account)
	{
		savingsAccountService.updateSavingAccount(accountId, saving_account);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}")
				.buildAndExpand(saving_account.getAccount_number())
				.toUri();
		return ResponseEntity.created(location).build();
	}
}
