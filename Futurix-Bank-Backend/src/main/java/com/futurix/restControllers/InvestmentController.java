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

import com.futurix.entities.TblInvestment;
import com.futurix.services.InvestmentService;

@RestController
public class InvestmentController {
	
	@Autowired
	private InvestmentService investmentService;
	
	
	@GetMapping("/investor/{investorId}/investments")
	public List<TblInvestment> retirieveInvestments(@PathVariable int investorId) {
		return investmentService.getInvestmentOfInvestor(investorId);
	}
	
	
	@GetMapping("/investments")
	public List<TblInvestment> retrieveAllInvestments() {
		return investmentService.getAllInvestment();
	}
	
	
	@PostMapping("/investor/{investorId}/investments")
	public ResponseEntity<TblInvestment> addInvestment(@PathVariable int investorId, @RequestBody TblInvestment investment) {
		investmentService.addInvestment(investorId, investment);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{investmentId}")
				.buildAndExpand(investment.getInvestmentId())
				.toUri();
		return ResponseEntity.created(location ).build();
	}
	
	
	@DeleteMapping("/investor/{investorId}/investments/{investmentId}")
	public ResponseEntity<Void> deleteInvestment(@PathVariable int investorId, @PathVariable Integer investmentId){
		investmentService.deleteInvestment(investorId, investorId);
		return ResponseEntity.noContent().build();
	}
	
	
	@PutMapping("/investor/{investorId}/investments/{investmentId}")
	public ResponseEntity<TblInvestment> updateInvestmentOfOneInvestor(@PathVariable int investorId, 
				@PathVariable Integer investmentId, @RequestBody TblInvestment investment) {
		
		investmentService.updateInvestment(investmentId, investorId, investment);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{investmentId}")
				.buildAndExpand(investment.getInvestmentId())
				.toUri();
		return ResponseEntity.created(location ).build();
	
	}
}
