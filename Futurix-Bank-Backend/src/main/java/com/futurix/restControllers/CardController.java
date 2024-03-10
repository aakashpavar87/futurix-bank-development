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

import com.futurix.entities.TblCard;
import com.futurix.services.CardService;

@RestController
public class CardController {

	@Autowired
	private CardService cardService;
	
	@GetMapping("/cards")
	public List<TblCard> retreiveAllCards (){
		return cardService.retreiveAllCard();
	}
	
	@GetMapping("/users/{id}/cards")
	public TblCard retriveOneAccount(@PathVariable int id) {
		return cardService.findCard(id);
		
	}
	
	@PostMapping("/users/{id}/cards")
	public ResponseEntity<TblCard> createCard(@RequestBody TblCard card , @PathVariable int id){
		cardService.createCard(card, id);
		URI locationUri =ServletUriComponentsBuilder.fromCurrentRequest()
				.buildAndExpand(card.getCard_number()).toUri();
		return ResponseEntity.created(locationUri).build();
		
	}
	
	@DeleteMapping("/users/{id}/cards")
	public ResponseEntity<Void> deleteCard(@PathVariable int id , @PathVariable int CustomerId){
		cardService.deleteCard(id, CustomerId);
		return ResponseEntity.noContent().build();
		
	}
	
	@PutMapping("/users/{id}/cards")
	public ResponseEntity<TblCard> updateCard(@PathVariable int id, @RequestBody TblCard card) {
		cardService.updateCard(id, card);
		URI locationUri =ServletUriComponentsBuilder.fromCurrentRequest()
				.buildAndExpand(card.getCard_number()).toUri();
		return ResponseEntity.created(locationUri).build();
	}
}
