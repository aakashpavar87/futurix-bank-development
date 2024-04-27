package com.futurix.restControllers;

import java.net.URI;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.futurix.entities.TblAddress;
import com.futurix.services.AddressService;

@RestController
public class AddressController {

	@Autowired
	private AddressService addressService;

	// Create/Add Address
	@PostMapping("/users/{userId}/address")
	public ResponseEntity<TblAddress> addAddress(@RequestBody TblAddress address, @PathVariable int userId) {
		return new ResponseEntity<TblAddress>(addressService.createAddress(address, userId), HttpStatus.OK);
	}

	// Get one 's Address
	@GetMapping("/users/{userId}/address")
	public TblAddress retirieveAddress(@PathVariable int userId) {
		return addressService.retrieveOneAddress(userId);
	}

	// Delete Address
	@DeleteMapping("/users/{userId}/address")
	public ResponseEntity<Void> deleteAddress(@PathVariable int userId) {
		addressService.deleteAddress(userId);
		return ResponseEntity.noContent().build();
	}

	// Update Address
	@PutMapping("/users/{userId}/address")
	public ResponseEntity<TblAddress> updatAddress(@PathVariable int userId, @RequestBody TblAddress address) {
		addressService.updateAddress(userId, address);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().buildAndExpand(address.getAddressId()).toUri();
		return ResponseEntity.created(location).build();
	}

	@PatchMapping("/users/{userId}/address/{id}")
	public ResponseEntity<TblAddress> patchEntity(@PathVariable int id, @RequestBody Map<String, Object> updatedFields)
			throws Exception {
		TblAddress updatedEntity = addressService.updateFieldsAddress(id, updatedFields);
		return ResponseEntity.ok(updatedEntity);
	}
}
