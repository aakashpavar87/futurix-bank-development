package com.futurix.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.futurix.entities.TblCard;
import com.futurix.entities.TblDebitCard;
import com.futurix.repositories.CardRepo;
import com.futurix.repositories.DebitCardRepo;

@Service
public class DebitCardService {

	@Autowired
	private CardRepo cardRepo;

	@Autowired
	private DebitCardRepo debitCardRepo;

	// Add Debit Card
	public void addDebitCard(long cardId, TblDebitCard debitCard) {

		TblCard foundCard = cardRepo.findById(cardId).get();
		foundCard.setDebitCard(debitCard);
		debitCard.setCard(foundCard);
		debitCardRepo.save(debitCard);
		cardRepo.save(foundCard);

	}
	
	// Ge All Debit Cards
	public List<TblDebitCard> getAllDebitCards() {
		return debitCardRepo.findAll();
	}
	
	// Get One Debit Card
	public TblDebitCard	getOneDebtCard(long cardId) {
		TblCard foundCard = cardRepo.findById(cardId).get();
		return foundCard.getDebitCard();
	}
	
	// Update a Debit Card
	public void updateDebitCard(long cardId, TblDebitCard debitCard) {
		
		TblCard foundCard = cardRepo.findById(cardId).get();
		TblDebitCard foundDebitCard = foundCard.getDebitCard();
		foundCard.setDebitCard(debitCard);
		foundDebitCard = debitCard;
		
		cardRepo.save(foundCard);
		debitCardRepo.save(foundDebitCard);
	
	}
	
	// Delete a Debit Card
	public void deleteDebitCard(long cardId) {
		TblCard foundCard = cardRepo.findById(cardId).get();
		TblDebitCard foundDebitCard = foundCard.getDebitCard();
		
		foundCard.setDebitCard(null);
		debitCardRepo.delete(foundDebitCard);
	}
	
	
	
}
