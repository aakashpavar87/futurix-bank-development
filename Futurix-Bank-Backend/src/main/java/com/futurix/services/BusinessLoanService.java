package com.futurix.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.futurix.repositories.BusinessLoanRepo;

@Service
public class BusinessLoanService {
	@Autowired
	private BusinessLoanRepo businessLoanRepo;
}
