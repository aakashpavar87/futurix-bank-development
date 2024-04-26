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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.futurix.entities.TblCreditCard;
import com.futurix.services.CreditCardService;

@RestController
public class CreditCardController {
	@Autowired
	private CreditCardService creditCardService;
	
	
	@GetMapping("/cards/{cardId}/creditCard")
	public TblCreditCard getOneCreditCard(@PathVariable long cardId) {
		return creditCardService.getCreditCard(cardId);
	}
	
	@GetMapping("/creditCards")
	public List<TblCreditCard> getAlCreditCard() {
		return creditCardService.getAllCreditCards();
	}
	
	@PostMapping("/cards/{cardId}/creditCard")
	public ResponseEntity<TblCreditCard> addCreditCard(@PathVariable long cardId,@RequestParam String pin,@RequestParam String income,@RequestParam String employment,@RequestParam String creditScore) {
		return new ResponseEntity<TblCreditCard>(creditCardService.addCreditCard(cardId, pin, income, employment, creditScore), HttpStatus.OK);
	}
	
	@PutMapping("/cards/{cardId}/creditCard")
	public ResponseEntity<TblCreditCard> updateCreditCard(@PathVariable long cardId, @RequestBody TblCreditCard creditCard) {
		creditCardService.updateCreditCard(cardId, creditCard);
		URI location= ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}")
				.buildAndExpand(creditCard.getId())
				.toUri();
		return ResponseEntity.created(location).build();
	}
	
	@DeleteMapping("/cards/{cardId}/creditCard")
	public ResponseEntity<Void> deleteOneCreditCard(@PathVariable int cardId) {
		creditCardService.deleteCreditCard(cardId);
		return ResponseEntity.noContent().build();
	}
}
