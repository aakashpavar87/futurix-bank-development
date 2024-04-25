package com.futurix.restControllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.futurix.dto.FundTransferDTO;
import com.futurix.entities.TblAccount;
import com.futurix.services.AccountService;

import jakarta.mail.MessagingException;

@RestController
public class AccountController {
	
	@Autowired
	private AccountService accountService;
	
	
	@GetMapping("/accounts")
	public List<TblAccount> retreiveAllAccount(){
		return accountService.retreiveAllAccount();
	}
	
	@GetMapping("/users/{id}/account")
	public TblAccount reteriveOneAccount(@PathVariable int id) {
		return accountService.findAccount(id);	
	}
	
	
	@PostMapping("/users/{id}/accounts")
	public ResponseEntity<TblAccount> createAccount(@RequestParam String account_type , @PathVariable int id) throws MessagingException{
		return new ResponseEntity<TblAccount>(accountService.createAccount(account_type, id), HttpStatus.CREATED);
	}
	
	@DeleteMapping("/users/{id}/accounts")
	public ResponseEntity<Void> deleteAccount(@PathVariable int id)
	{
		accountService.deleteAccount(id);
		return ResponseEntity.noContent().build();
	}
	
	@PostMapping("/account/{accId}/deposit")
	public ResponseEntity<String> depositMoneyInAccount(@PathVariable int accId, @RequestParam int amount, @RequestParam String desc) {
		
		accountService.depositInAccount(accId, amount, desc != null ? desc : "");
		return new ResponseEntity<String>("Amount Deposited Successfully", HttpStatus.OK);
	}
	
//	@PostMapping("/account/{accId}/transfer")
//	public ResponseEntity<String> transferMoneyToAnotherAccount(@PathVariable int accId, @RequestParam int accountNumber, @RequestParam int amount, @RequestParam String desc) {
//		accountService.transferFromOneAccountToAnother(accId, amount, accountNumber, desc != null ? desc : "");
//		return new ResponseEntity<String>("Money transferred to Account Number : "+accountNumber, HttpStatus.OK);
//	}
	
	
	@PostMapping("/account/{accId}/transfer")
	public ResponseEntity<String> transferMoneyToAnotherAccount(@PathVariable int accId, @RequestBody FundTransferDTO ftDTO) {
		accountService.transferFromOneAccountToAnother(accId, ftDTO.getAmount(), ftDTO.getAccountNumber(), ftDTO.getDesc() != null ? ftDTO.getDesc() : "");
		return new ResponseEntity<String>("Money transferred to Account Number : "+ftDTO.getAccountNumber(), HttpStatus.OK);
	}
	
	@PostMapping("/account/{accId}/withdraw")
	public ResponseEntity<String> withdrawMoneyFromAccount(@PathVariable int accId, @RequestParam int amount, @RequestParam String desc) {
		accountService.withdrawFromAccount(accId, amount, desc != null ? desc : "");
		return new ResponseEntity<String>("Successfully withdrawn money", HttpStatus.OK);
	}
	
}
