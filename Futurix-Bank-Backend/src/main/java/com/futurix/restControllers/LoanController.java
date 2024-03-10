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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.futurix.entities.TblLoan;
import com.futurix.services.LoanService;

@RestController
@RequestMapping("/users/{userId}")
public class LoanController {
	
	@Autowired
	private LoanService loanService;
	
	@GetMapping("/loan/{loanId}")
	public TblLoan retrieveLoanFromDatabase(@PathVariable int userId, @PathVariable int loanId) {
		 return loanService.retrieveLoan(userId,loanId);
	}
	
	@PostMapping("/loan")
	public ResponseEntity<TblLoan> createLoan(@RequestBody TblLoan loan, @PathVariable int userId) {
		
		loanService.createLoan(loan, userId);
		
		URI location = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{loanId}")
				.buildAndExpand(loan.getLoan_id())
				.toUri();
		
		return ResponseEntity.created(location ).build();
	}
	
	@GetMapping("/loan")
	public List<TblLoan> getAllLoansOfCustomer(@PathVariable int userId) {
		return loanService.retrieveAllLoansOfCustomer(userId);
	}
	
	@DeleteMapping("/loan/{loanId}")
	public ResponseEntity<Void> deleteLoan(@PathVariable int userId, @PathVariable int loanId) {
		loanService.deleteLoan(userId, loanId);
		return ResponseEntity.noContent().build();
	}
	
	@PutMapping("/loan/{loanId}")
	public ResponseEntity<TblLoan> updateLoanOfCustomer(@PathVariable int userId,
				@PathVariable int loanId, @RequestBody TblLoan loan) {
		
		loanService.updateLoan(userId, loan, loanId);
		
		URI location = ServletUriComponentsBuilder.fromCurrentRequest()
				.buildAndExpand()
				.toUri();
		return ResponseEntity.created(location ).build()
;	}
	
	
}
