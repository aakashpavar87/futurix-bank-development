package com.futurix.services;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.futurix.entities.TblAccount;
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
		ArrayList<TblCustomer> listCustomers = new ArrayList();
		if (foundCustomer != null) {
			listCustomers.add(foundCustomer);
		}
		cardRepo.save(card);
	}

	// Select all Card
	public List<TblCard> retreiveAllCard() {
		return cardRepo.findAll();
	}

	// select one Card
	public TblCard findCard(int id) {
		TblCustomer foundCustomer = customerRepo.findById(id).orElse(null);
		TblCard foundCard = (TblCard) foundCustomer.getCardList();
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
