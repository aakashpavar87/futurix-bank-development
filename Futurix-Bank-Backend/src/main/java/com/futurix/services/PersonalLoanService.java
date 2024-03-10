package com.futurix.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.futurix.repositories.PersonalLoanRepo;

@Service
public class PersonalLoanService {
	@Autowired
	private PersonalLoanRepo personalLoanRepo;
}
