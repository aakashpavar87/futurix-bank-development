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
	
	@GetMapping("/users/{id}/cards/{cardId}")
	public TblCard retriveOneAccount(@PathVariable int id, @PathVariable int cardId) {
		return cardService.findCard(id, cardId);
		
	}
	
	@PostMapping("/users/{id}/cards")
	public ResponseEntity<TblCard> createCard(@RequestParam String cardStatus, @PathVariable int id){
		return new ResponseEntity<TblCard>(cardService.createCard(cardStatus, id), HttpStatus.OK);
	}
	
	@DeleteMapping("/users/{id}/cards/{cardId}")
	public ResponseEntity<Void> deleteCard(@PathVariable int id, @PathVariable int cardId){
		cardService.deleteCard(cardId, id);
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
