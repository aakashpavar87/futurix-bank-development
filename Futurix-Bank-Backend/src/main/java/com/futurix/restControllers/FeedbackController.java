package com.futurix.restControllers;

import java.net.URI;

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

import com.futurix.entities.TblFeedback;
import com.futurix.services.FeedbackServices;

@RestController


public class FeedbackController {
	
	@Autowired
	private FeedbackServices feedbackServices;
	
	//create / add Feedback
	@PostMapping("/users/{userId}/feedback")
	public ResponseEntity<TblFeedback> addFeedback(@RequestBody TblFeedback feedback, @PathVariable int userId){
		feedbackServices.saveFeedback(feedback, userId);
		URI locationUri = ServletUriComponentsBuilder.fromCurrentRequest()
					.path("/{id}")
					.buildAndExpand(feedback.getId())
					.toUri();
		return ResponseEntity.created(locationUri).build();
		
	}
	
	//Get one's Feedback
	@GetMapping("/users/{userId}/feedback")
	public TblFeedback retreveFeedback(@PathVariable int userId) {
		return feedbackServices.findFeedback(userId);
	}
	
	//Delete Feedback
	@DeleteMapping("/users/{userId}/feedback/{id}")
	public ResponseEntity<Void> deleteFeedback(@PathVariable int id , @PathVariable int userId){
		feedbackServices.deleteFeedback(id , userId);
		return ResponseEntity.noContent().build();
	}
	
	//update Feedback
	@PutMapping("/users/{userId}/feedback/{id}")
	public ResponseEntity<TblFeedback> updateFeedback(@PathVariable int id, @RequestBody  TblFeedback feedback)
			{
				feedbackServices.updateFeedback(id , feedback);
				URI locationUri = ServletUriComponentsBuilder.fromCurrentRequest()
						.buildAndExpand(feedback.getId())
						.toUri();
				
				return ResponseEntity.created(locationUri).build();
				
				
			}
}
