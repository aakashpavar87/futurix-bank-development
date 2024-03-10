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

import com.futurix.entities.TblAccount;
import com.futurix.entities.TblCustomer;
import com.futurix.services.AccountService;

@RestController
public class AccountController {
	
	@Autowired
	private AccountService accountService;
	
	
	@GetMapping("/users/{id}/accounts")
	public List<TblAccount> retreiveAllAccount(){
		return accountService.retreiveAllAccount();
	}
	
	@GetMapping("/users/{id}/account")
	public TblAccount reteriveOneAccount(@PathVariable int id) {
		return accountService.findAccount(id);
		
	}
	
	
	@PostMapping("/users/{id}/accounts")
	public ResponseEntity<TblAccount> createAccount(@RequestBody TblAccount account , @PathVariable int id){
		accountService.createAccount(account, id);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest()
				.buildAndExpand(account.getAccountnumber()).toUri();
		return ResponseEntity.created(location).build();
	
	}
	
	@DeleteMapping("/users/{id}/accounts")
	public ResponseEntity<Void> deleteAccount(@PathVariable int id)
	{
		accountService.deleteAccount(id);
		return ResponseEntity.noContent().build();
	}
	
}
