package com.futurix.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.futurix.repositories.TransactionRepo;

@Service
public class TransactionService {
	@Autowired
	private TransactionRepo transactionRepo;
	
	
}
