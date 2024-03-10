package com.futurix.restControllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.futurix.services.TransactionService;

@RestController
public class TransationController {
	@Autowired
	private TransactionService transactionService;
}
