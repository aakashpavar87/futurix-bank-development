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

import com.futurix.entities.TblInvestor;
import com.futurix.services.InvestorService;

@RestController
public class InvestorController {
	@Autowired
	private InvestorService investorService;
	
	@GetMapping("/investor/{investorId}")
	public TblInvestor retrieveInvestor(@PathVariable int investorId) {
		return investorService.getInvestor(investorId);
	}
	
	@GetMapping("/investors")
	public List<TblInvestor> retrieveAllInvestor() {
		return investorService.getAllInvestor();
	}
	
	@PostMapping("/investor")
	public ResponseEntity<TblInvestor> addInvestor(@RequestBody TblInvestor investor) {
		investorService.addInvestor(investor);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{investmentId}")
				.buildAndExpand(investor.getId())
				.toUri();
		return ResponseEntity.created(location ).build();
	}
	
	@PutMapping("/investor/{investorId}")
	public ResponseEntity<Void> updateOneInvestor(@PathVariable int investorId, @RequestBody TblInvestor investor) {
		investorService.updateInvestor(investor, investorId);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{investmentId}")
				.buildAndExpand(investor.getId())
				.toUri();
		return ResponseEntity.created(location ).build();
	}
	
	@DeleteMapping("/investor/{investorId}")
	public ResponseEntity<Void> removeInvestor(@PathVariable int investorId) {
		investorService.deleteInvestor(investorId);
		return ResponseEntity.noContent().build();
	}
}
