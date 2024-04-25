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

import com.futurix.entities.TblDebitCard;
import com.futurix.services.DebitCardService;

@RestController
public class DebitCardController {
	@Autowired
	private DebitCardService debitCardService;
	
	@GetMapping("/cards/{cardId}/debitCard")
	public TblDebitCard getOneDebitCard(@PathVariable int cardId) {
		return debitCardService.getOneDebtCard(cardId);
	}
	
	@GetMapping("/debitCards")
	public List<TblDebitCard> getAllDebitCards() {
		return debitCardService.getAllDebitCards();
	}
	
	@PostMapping("/cards/{cardId}/debitCard")
	public ResponseEntity<TblDebitCard> addDebitCard(@PathVariable int cardId, @RequestParam String pin) {
		return new ResponseEntity<TblDebitCard>(debitCardService.addDebitCard(cardId, pin), HttpStatus.OK);
	}
	
	@PutMapping("/cards/{cardId}/debitCard")
	public ResponseEntity<TblDebitCard> updateOneDebitCard(@PathVariable int cardId, @RequestBody TblDebitCard debitCard) {
		debitCardService.updateDebitCard(cardId, debitCard);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}")
				.buildAndExpand(debitCard.getId())
				.toUri();;
		return ResponseEntity.created(location ).build();
	}
	
	@DeleteMapping("/cards/{cardId}/debitCard")
	public ResponseEntity<Void> deleteOneDebitCard(@PathVariable int cardId) {
		debitCardService.deleteDebitCard(cardId);
		return ResponseEntity.noContent().build();
	}
}
