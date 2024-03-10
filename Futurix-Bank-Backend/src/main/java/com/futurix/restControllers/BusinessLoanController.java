package com.futurix.restControllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.futurix.services.BusinessLoanService;

@RestController
public class BusinessLoanController {
	@Autowired
	private BusinessLoanService businessLoanService;
}
