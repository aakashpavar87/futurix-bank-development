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

import com.futurix.entities.TblBusiness_loan;
import com.futurix.services.BusinessLoanService;

@RestController
public class BusinessLoanController {
	@Autowired
	private BusinessLoanService businessLoanService;
	
	@GetMapping("/loan/{loanId}/business")
	public TblBusiness_loan retrieveOneBusinessLoan(@PathVariable int loanId) {
		return businessLoanService.getOneBusinessLoan(loanId);
	}
	
	@GetMapping("/businessLoans")
	public List<TblBusiness_loan> retrieveAllBusinessLoans() {
		return businessLoanService.getAllBusinessLoans();
	}
	
	@PostMapping("/loan/{loanId}/business")
	public ResponseEntity<TblBusiness_loan> addBusinessLoantoDb(@PathVariable int loanId, @RequestBody TblBusiness_loan businessLoan) {
		businessLoanService.addBusinessLoan(loanId, businessLoan);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}")
				.buildAndExpand(businessLoan.getId())
				.toUri();
		return ResponseEntity.created(location ).build();
	}
	
	@PutMapping("/loan/{loanId}/business")
	public ResponseEntity<TblBusiness_loan> updateBusinessLoan(@PathVariable int loanId, @RequestBody TblBusiness_loan businessLoan) {
		businessLoanService.updateBusinessLoan(loanId, businessLoan);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}")
				.buildAndExpand(businessLoan.getId())
				.toUri();
		return ResponseEntity.created(location ).build();
	}
	
	@DeleteMapping("/loan/{loanId}/business")
	public ResponseEntity<Void> deleteBusinessLoan(@PathVariable int loanId) {
		businessLoanService.removeBusinessLoan(loanId);
		return ResponseEntity.noContent().build();
	}
	
}
