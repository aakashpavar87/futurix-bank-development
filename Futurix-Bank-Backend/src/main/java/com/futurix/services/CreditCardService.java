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
	public TblCreditCard addCreditCard(long cardId, String pin,String income, String employment, String creditScore) {
		
		TblCreditCard creditCard = new TblCreditCard();
		TblCard foundCard = cardRepo.findById(cardId).get();
		
		creditCard.setCharges(0d);
		creditCard.setPin(pin);
		creditCard.setCreditScore(creditScore);
		creditCard.setEmployment(employment);
		creditCard.setIncome(income);
		creditCard.setCreditLimit(50000d);
		
		
		foundCard.setCreditCard(creditCard);
		creditCard.setCard(foundCard);
		return creditCardRepo.save(creditCard);
		
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
