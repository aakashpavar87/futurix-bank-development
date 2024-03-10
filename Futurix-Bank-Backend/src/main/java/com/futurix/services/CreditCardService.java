package com.futurix.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.futurix.entities.TblCard;
import com.futurix.entities.TblCreditCard;
import com.futurix.repositories.CardRepo;
import com.futurix.repositories.CreditCardRepo;

@Service
public class CreditCardService {
	
	@Autowired
	private CreditCardRepo creditCardRepo;
	
	@Autowired
	private CardRepo cardRepo;
		
	// Add Card
	public void addCreditCard(long cardId, TblCreditCard creditCard) {
		
		TblCard foundCard = cardRepo.findById(cardId).get();
		foundCard.setCreditCard(creditCard);
		creditCard.setCard(foundCard);
		creditCardRepo.save(creditCard);
		cardRepo.save(foundCard);
		
	}
	
	// Get One Credit Card
	public TblCreditCard getCreditCard(long cardId) {
		TblCard foundCard = cardRepo.findById(cardId).get();
		return foundCard.getCreditCard();
	}
	
	// Get All CreditCards
	public List<TblCreditCard> getAllCreditCards() {
		return creditCardRepo.findAll();
	}
	
	// Update Credit Card
	public void updateCreditCard(long cardId, TblCreditCard creditCard) {
		
		TblCard foundCard = cardRepo.findById(cardId).get();
		TblCreditCard foundCreditCard = foundCard.getCreditCard();
		foundCreditCard = creditCard;
		foundCard.setCreditCard(foundCreditCard);
		
		cardRepo.save(foundCard);
		creditCardRepo.save(foundCreditCard);
		
	}
	
	// Delete Credit Card
	public void deleteCreditCard(long cardId) {
		
		TblCard foundCard = cardRepo.findById(cardId).get();
		TblCreditCard foundCreditCard = foundCard.getCreditCard();
		foundCard.setCreditCard(null);
		creditCardRepo.delete(foundCreditCard);
		
	}
}
