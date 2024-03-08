package com.futurix.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.futurix.entities.TblAddress;
import com.futurix.entities.TblCustomer;
import com.futurix.repositories.AddressRepo;
import com.futurix.repositories.CustomerRepo;

@Component
public class AddressService {
	@Autowired
	private AddressRepo addressRepo;
	
	@Autowired
	private CustomerRepo customerRepo;
	
	public void createAddress(TblAddress address, int userId) {
		
		TblCustomer foundCustomer =  customerRepo.findById(userId).get();
		address.setCustomer(foundCustomer);
		addressRepo.save(address);
		
		foundCustomer.setAddress(address);
		customerRepo.save(foundCustomer);
	}
	
	public List<TblAddress> retrieveAllAddress() {
		return addressRepo.findAll();
	}
	
	public TblAddress retrieveOneAddress(int userId) {
		customerRepo.findById(userId);
		return addressRepo.findById(userId).orElse(null);
	}
	
	public void updateAddress(int id,TblAddress address) {
		TblAddress foundAddress = addressRepo.findById(id).get();
		foundAddress = address;
		foundAddress.setAddress_id(id);
		addressRepo.save(foundAddress);
	}
	
	public void deleteAddress(int id) {
		addressRepo.deleteById(id);
	}
}
