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

import com.futurix.entities.TblPersonal_Loan;
import com.futurix.services.PersonalLoanService;

@RestController
public class PersonalLoanController {
	@Autowired
	private PersonalLoanService personalLoanService;
	
	@GetMapping("/loan/{loanId}/personal")
	public TblPersonal_Loan retrieveOneBusinessLoan(@PathVariable int loanId) {
		return personalLoanService.getOnePersonaLoan(loanId);
	}
	
	@GetMapping("/personalLoans")
	public List<TblPersonal_Loan> retrieveAllBusinessLoans() {
		return personalLoanService.getAllPersonalLoans();
	}
	
	@PostMapping("/loan/{loanId}/personal")
	public ResponseEntity<TblPersonal_Loan> addBusinessLoantoDb(@PathVariable int loanId, @RequestBody TblPersonal_Loan personalLoan) {
		personalLoanService.addPersonalLoan(loanId, personalLoan);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}")
				.buildAndExpand(personalLoan.getLoan_id())
				.toUri();
		return ResponseEntity.created(location ).build();
	}
	
	@PutMapping("/loan/{loanId}/personal")
	public ResponseEntity<TblPersonal_Loan> updateBusinessLoan(@PathVariable int loanId, @RequestBody TblPersonal_Loan personalLoan) {
		personalLoanService.updatePersonalLoan(loanId, personalLoan);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}")
				.buildAndExpand(personalLoan.getLoan_id())
				.toUri();
		return ResponseEntity.created(location ).build();
	}
	
	@DeleteMapping("/loan/{loanId}/personal")
	public ResponseEntity<Void> deleteBusinessLoan(@PathVariable int loanId) {
		personalLoanService.removePersonalLoan(loanId);
		return ResponseEntity.noContent().build();
	}
}
