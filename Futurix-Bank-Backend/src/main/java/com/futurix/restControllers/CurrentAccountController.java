package com.futurix.restControllers;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.futurix.entities.TblCurrent_Account;
import com.futurix.services.CurrentAccountService;

@RestController
public class CurrentAccountController {
	
	@Autowired
	private CurrentAccountService currentAccountService;
	
	@GetMapping("/account/{accountId}/current")
	public TblCurrent_Account getSavingAccount(int accountId) {
		return currentAccountService.retrieveCurrentAccount(accountId);
	}
	
	@PostMapping("/account/{accountId}/current")
	public ResponseEntity<TblCurrent_Account> createSavingsAccount(@RequestBody TblCurrent_Account current_Account,
			@PathVariable int accountId) {
		currentAccountService.addCurrentAccount(accountId, current_Account);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest()
					.path("/{id}")
					.buildAndExpand(current_Account.getAccount_number())
					.toUri();
		return ResponseEntity.created(location).build();
	}
	
	@DeleteMapping("/account/{accountId}/current")
	public ResponseEntity<Void> removeCurrentAccount(@PathVariable int accountId) {
		currentAccountService.deleteCurrentAccount(accountId);
		return ResponseEntity.noContent().build();
	}
	
	@GetMapping("/account/current")
	public List<TblCurrent_Account> getAllSavingsAccounts() {
		return currentAccountService.getAllCurrentAccount();
	}
	
	@PutMapping("/account/{accountId}/current")
	public ResponseEntity<TblCurrent_Account> updateCurrentAccount(@PathVariable int accountId, 
			@RequestBody TblCurrent_Account current_Account)
	{
		currentAccountService.updateCurrentAccount(accountId, current_Account);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}")
				.buildAndExpand(current_Account.getAccount_number())
				.toUri();
		return ResponseEntity.created(location).build();
	}
}
