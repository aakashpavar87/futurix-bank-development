package com.futurix.restControllers;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.futurix.entities.TblSaving_account;
import com.futurix.services.SavingsAccountService;

@RestController
@RequestMapping("/account/{accountId}")
public class SavingsAccountController {
	
	@Autowired
	private SavingsAccountService savingsAccountService;
	
	@GetMapping("/savings")
	public TblSaving_account getSavingAccount(Long accountId) {
		return savingsAccountService.retrieveSavingAccount(accountId);
	}
	
	@PostMapping("/savings")
	public ResponseEntity<TblSaving_account> createSavingsAccount(@RequestBody TblSaving_account saving_account, @PathVariable long accountId) {
		savingsAccountService.addSavingAccount(accountId, saving_account);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest()
					.path("/{id}")
					.buildAndExpand(saving_account.getAccount_number())
					.toUri();
		return ResponseEntity.created(location).build();
	}
	
	
}
