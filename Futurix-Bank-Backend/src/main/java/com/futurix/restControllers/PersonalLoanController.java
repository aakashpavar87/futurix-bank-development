package com.futurix.restControllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.futurix.services.PersonalLoanService;

@RestController
public class PersonalLoanController {
	@Autowired
	private PersonalLoanService personalLoanService;
}
