package com.futurix.restControllers;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.futurix.entities.TblCustomer;
import com.futurix.services.UserService;

@RestController
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@GetMapping("/")
	public String hello() {
		return "Hello Aakash";
	}
	
	@GetMapping("/users")
	public List<TblCustomer> retrieveAllUsers() {
		return userService.retreiveAllCustomer();
	}
	
	@PostMapping("/users")
	public ResponseEntity<TblCustomer> createUser(@RequestBody TblCustomer customer) {
		userService.createUser(customer);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}")
				.buildAndExpand(customer.getId())
				.toUri();
		return ResponseEntity.created(location).build();
	}
	
	@GetMapping("/users/{id}")
	public TblCustomer retrieveOneCustomer(@PathVariable int id) {
		return userService.findCustomer(id);
	}
	
	@PutMapping("/users/{id}")
	public ResponseEntity<TblCustomer> updateCustomerDetails(@PathVariable int id, @RequestBody TblCustomer customer) {
		userService.updateCustomer(id,customer);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest()
				.buildAndExpand(customer.getId())
				.toUri();
		return ResponseEntity.created(location).build();
	}
	
	@DeleteMapping("/users/{id}")
	public ResponseEntity<Void> deleteCustomer(@PathVariable int id) {
		userService.removeCustomer(id);
		return ResponseEntity.noContent().build();
	}
}
