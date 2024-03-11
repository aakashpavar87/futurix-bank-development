package com.futurix.services;

import java.util.List;
import java.util.function.Predicate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.futurix.entities.TblCustomer;
import com.futurix.entities.TblFeedback;
import com.futurix.repositories.CustomerRepo;
import com.futurix.repositories.FeedbackRepo;

@Service
public class FeedbackServices {
	@Autowired
	private CustomerRepo customerRepo;
	
	@Autowired
	private FeedbackRepo feedbackRepo;
	
	//get Feedback
	public void saveFeedback(TblFeedback feedback , int id) {
		TblCustomer foundCustomer = customerRepo.findById(id).orElse(null);
		feedback.setCustomer(foundCustomer);
		feedbackRepo.save(feedback);
		
		List<TblFeedback> listOfFeedbacks = foundCustomer.getFeedbackList(); 
		listOfFeedbacks.add(feedback);
		
		foundCustomer.setFeedbackList(listOfFeedbacks);
		customerRepo.save(foundCustomer);
	}
	
	//select all feedback
	public List<TblFeedback> retreiveAllFeedbacks(){
		
		return feedbackRepo.findAll();
	}

	//select one feedback
	public TblFeedback findFeedback(int id) {
		TblCustomer foundCustomer = customerRepo.findById(id).orElse(null);
		Predicate<? super TblFeedback> predicate= feedback -> feedback.getId() == id;
		List<TblFeedback> feedbackList = foundCustomer.getFeedbackList();
		TblFeedback foundFeedback=  feedbackList.stream().filter(predicate).findFirst().get();
		
		return foundFeedback;
	}
	
	
	//Delete Feedback
	public void deleteFeedback(int id , int customerId) {
		TblCustomer foundCustomer = customerRepo.findById(id).orElse(null);
		Predicate<? super TblFeedback> predicate= feedback -> feedback.getId() == id;
		List<TblFeedback> feedbackList = foundCustomer.getFeedbackList();
		TblFeedback foundFeedback=  feedbackList.stream().filter(predicate).findFirst().get();
		feedbackRepo.delete(foundFeedback);
		feedbackList.removeIf(predicate);
		customerRepo.save(foundCustomer);
	}
	
	//update Feedback
	public void updateFeedback(int id , TblFeedback feedback) {
		TblCustomer foundCustomer = customerRepo.findById(id).orElse(null);
		Predicate<? super TblFeedback> predicate= foundFeedback -> foundFeedback.getId() == id;
		List<TblFeedback> feedbackList = foundCustomer.getFeedbackList();
		TblFeedback foundFeedback = feedbackList.stream().filter(predicate).findFirst().get();
		feedbackRepo.save(foundFeedback);
		
	}
}


