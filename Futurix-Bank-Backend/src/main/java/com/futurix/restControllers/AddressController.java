package com.futurix.restControllers;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.futurix.entities.TblAddress;
import com.futurix.services.AddressService;

@RestController
@RequestMapping("/users/{userId}")
public class AddressController {

	@Autowired
	private AddressService addressService;
	
	// Create/Add Address
	@PostMapping("/address")
	public ResponseEntity<TblAddress> addAddress(@RequestBody TblAddress address, @PathVariable int userId) {
		addressService.createAddress(address, userId);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest()
					.path("/{id}")
					.buildAndExpand(address.getAddress_id())
					.toUri();
		return ResponseEntity.created(location).build();
	}
	
	
	// Get one 's Address
	@GetMapping("/address")
	public TblAddress retirieveAddress(@PathVariable int userId){
		return addressService.retrieveOneAddress(userId);
	}
	
	
	// Delete Address
	@DeleteMapping("/address/{id}")
	public ResponseEntity<Void> deleteAddress(@PathVariable int id) {
		addressService.deleteAddress(id);
		return ResponseEntity.noContent().build();
	}
	
	
	// Update Address
	@PutMapping("/address/{id}")
	public ResponseEntity<TblAddress> updatAddress(@PathVariable int id, @RequestBody TblAddress address) {
		addressService.updateAddress(id, address);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest()
				.buildAndExpand(address.getAddress_id())
				.toUri();
		return ResponseEntity.created(location).build();
	}
}
