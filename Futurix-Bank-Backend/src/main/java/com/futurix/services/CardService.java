package com.futurix.services;

import java.time.LocalDate;
import java.util.List;
import java.util.function.Predicate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.futurix.entities.TblCard;
import com.futurix.entities.TblCustomer;
import com.futurix.repositories.CardRepo;
import com.futurix.repositories.CustomerRepo;
import com.futurix.services.debitCard.DebitCardGenerator;

@Service
public class CardService {
	@Autowired
	private CardRepo cardRepo;
	@Autowired
	private CustomerRepo customerRepo;

	// Create Card
	public TblCard createCard(String card_status, int id) {
		TblCard newCard = new TblCard();
		TblCustomer foundCustomer = customerRepo.findById(id).orElse(null);
		List<TblCard> foundCardList = foundCustomer.getCardList();
		
		newCard.setAccountnumber(foundCustomer.getAccount().getAccountnumber());
		newCard.setCard_status(card_status);
		newCard.setNewCardNumber(DebitCardGenerator.generateDebitCardNumber());
		newCard.setDate_of_issue(LocalDate.now());
		newCard.setDate_of_exspiry(LocalDate.now().plusYears(4));
		newCard.setCustomer(foundCustomer);
		newCard.setEmail(foundCustomer.getEmail());
		
		foundCardList.add(newCard);
		
//		loging
//		foundCardList.stream().forEach(newcard -> System.out.println(newCard.getCardType()));
		
		foundCustomer.setCardList(foundCardList);
		newCard.setCustomer(foundCustomer);
		
//		customerRepo.save(foundCustomer);
		return cardRepo.save(newCard);
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
