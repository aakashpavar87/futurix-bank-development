package com.futurix.services;

import java.util.List;
import java.util.Map;

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

	// Adding Address in Database
	public TblAddress createAddress(TblAddress address, int userId) {
		TblCustomer foundCustomer = customerRepo.findById(userId).get();
		foundCustomer.setAddress(address);
		address.setCustomer(foundCustomer);
		return addressRepo.save(address);
//		customerRepo.save(foundCustomer);
	}

	// Retrieving All Address
	public List<TblAddress> retrieveAllAddress() {
		return addressRepo.findAll();
	}

	public TblAddress retrieveOneAddress(int userId) {
		return addressRepo.findById(customerRepo.findById(userId).get().getAddress().getAddressId()).get();
	}

	// Update Address from Database
	public void updateAddress(int userId, TblAddress address) {

		TblCustomer foundCustomer = customerRepo.findById(userId).get();

		TblAddress foundAddress = foundCustomer.getAddress();

		foundAddress = address;
		foundAddress.setAddressId(foundAddress.getAddressId());
		addressRepo.save(foundAddress);

	}

	public TblAddress updateFieldsAddress(int id, Map<String, Object> updatedFields) throws Exception {
		TblAddress existingEntity = addressRepo.findById(id)
				.orElseThrow(() -> new Exception("Entity with id " + id + " not found"));
		updatedFields.forEach((fieldName, value) -> {
			// Use reflection or specific methods to update fields
			// Example: You can use setters to update fields dynamically
			switch (fieldName) {
			case "street":
				existingEntity.setStreet((String) value);
				break;
			case "city":
				existingEntity.setCity((String) value);
				break;
			case "country":
				existingEntity.setCountry((String) value);
				break;
			case "state":
				existingEntity.setState((String) value);
				break;
			case "zipcode":
				existingEntity.setZipcode((String) value);
				break;
			
			// Add more cases for other fields
			}
		});

		// Save the updated entity
		return addressRepo.save(existingEntity);
	}

	// Delete Address From Database
	public void deleteAddress(int userId) {
		TblCustomer foundCustomer = customerRepo.findById(userId).get();
		addressRepo.deleteById(foundCustomer.getAddress().getAddressId());
	}
}
