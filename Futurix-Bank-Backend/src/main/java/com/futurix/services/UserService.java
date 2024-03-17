package com.futurix.services;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.futurix.entities.TblCustomer;
import com.futurix.repositories.CustomerRepo;

@Component
public class UserService {
	@Autowired
	private CustomerRepo customerRepo;
	
	// Insert Customer
	public void createUser(TblCustomer customer) {
		customer.setDateOfOpening(LocalDate.now());
		customerRepo.save(customer);
	}
	
	// Select All Customer
	public List<TblCustomer> retreiveAllCustomer() {
		return customerRepo.findAll();
	}
	
	// Delete Customer
	public void removeCustomer(int id) {
		customerRepo.deleteById(id);
	}
	
	// Select one Customer
	public TblCustomer findCustomer(int id) {
		return customerRepo.findById(id).orElse(null);
	}
	
	// Update one customer
	public void updateCustomer(int id,TblCustomer customer) {
		TblCustomer foundCustomer = customerRepo.findById(id).get();
		foundCustomer = customer;
		foundCustomer.setId(id);
		customerRepo.save(foundCustomer);
	}
}
