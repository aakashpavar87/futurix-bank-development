package com.futurix.services;

import java.util.List;
import java.util.function.Predicate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.futurix.entities.TblCard;
import com.futurix.entities.TblCustomer;
import com.futurix.repositories.CardRepo;
import com.futurix.repositories.CustomerRepo;

@Service
public class CardService {
	@Autowired
	private CardRepo cardRepo;
	@Autowired
	private CustomerRepo customerRepo;

	// Create Card
	public void createCard(TblCard card, int id) {
		TblCustomer foundCustomer = customerRepo.findById(id).orElse(null);
		List<TblCard> foundCardList = foundCustomer.getCardList();
		card.setAccountnumber(foundCustomer.getAccountNumber());
		foundCardList.add(card);
		
		// loging
		foundCardList.stream().forEach(newcard -> System.out.println(card.getCardType()));
		
		foundCustomer.setCardList(foundCardList);
		card.setCustomer(foundCustomer);
		
		customerRepo.save(foundCustomer);
		cardRepo.save(card);
	}

	// Select all Card
	public List<TblCard> retreiveAllCard() {
		return cardRepo.findAll();
	}

	// select one Card
	public TblCard findCard(int id, int cardId) {
		TblCustomer foundCustomer = customerRepo.findById(id).orElse(null);
		List<TblCard> foundCardList = foundCustomer.getCardList();
		Predicate<? super TblCard> predicate = card -> card.getCard_number() == cardId;
		TblCard foundCard = foundCardList.stream().filter(predicate ).findFirst().get();
		return foundCard;
	}

	// Delete Card
	public void deleteCard(int id, int customerId) {
		TblCustomer foundCustomer = customerRepo.findById(customerId).orElse(null);
		Predicate<? super TblCard> predicate = card -> card.getCard_number() == id;
		List<TblCard> cardList = foundCustomer.getCardList();
		TblCard foundCard = cardList.stream().filter(predicate).findFirst().get();
		cardRepo.delete(foundCard);
		cardList.removeIf(predicate);
		customerRepo.save(foundCustomer);

	}

	// update card
	public void updateCard(int id, TblCard card) {
		TblCustomer foundCustomer = customerRepo.findById(id).get();
		Predicate<? super TblCard> predicate = foundCard -> foundCard.getCard_number() == id;
		List<TblCard> cardList = foundCustomer.getCardList();
		TblCard foundCard = cardList.stream().filter(predicate).findFirst().get();
		cardRepo.save(foundCard);
	}
}
