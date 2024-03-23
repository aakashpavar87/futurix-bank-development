package com.futurix.restControllers;

import java.io.IOException;
import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.futurix.entities.TblCustomer;
import com.futurix.filestorage.FileDataService;
import com.futurix.services.UserService;

@RestController
public class UserController {

	@Autowired
	private UserService userService;
	
	@Autowired
	private FileDataService fileDataService;
	
	@GetMapping("/")
	public String hello() {
		return "Hello Aakash";
	}

	@GetMapping("/users")
	public List<TblCustomer> retrieveAllUsers() {
		return userService.retreiveAllCustomer();
	}
	
	@GetMapping("/users/{id}/profileImage")
	public ResponseEntity<?> getProfilemageFromDatabase(@PathVariable int id) throws IOException {
		
		byte[] imageData = fileDataService.downloadImageFromFileSystemById(id);
		
		return ResponseEntity.status(HttpStatus.OK)
				.contentType(MediaType.valueOf("image/jpg"))
				.body(imageData);
	}

	@PostMapping("/users")
	public ResponseEntity<TblCustomer> createUser(@RequestBody TblCustomer customer) {
		return new ResponseEntity<TblCustomer>(userService.createUser(customer), HttpStatus.CREATED);
	}
	
	@PutMapping("/users/{id}/profileImage")
	public ResponseEntity<TblCustomer> addProfileImage(@PathVariable int id, @RequestParam(name = "image") MultipartFile file) throws IllegalStateException, IOException{
		return new ResponseEntity<TblCustomer>(userService.addProfileImage(id, file), HttpStatus.ACCEPTED);
	}
	
	

	@GetMapping("/users/{id}")
	public TblCustomer retrieveOneCustomer(@PathVariable int id) {
		return userService.findCustomer(id);
	}
	
	@GetMapping("/users/email/{email}")
	public TblCustomer retrieveCustomerByEmail(@PathVariable String email) {
		return userService.findCustomerByEmail(email);
	}

	@PutMapping("/users/{id}")
	public ResponseEntity<TblCustomer> updateCustomerDetails(@PathVariable int id, @RequestBody TblCustomer customer) {
		userService.updateCustomer(id, customer);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().buildAndExpand(customer.getId()).toUri();
		return ResponseEntity.created(location).build();
	}

	@DeleteMapping("/users/{id}")
	public ResponseEntity<Void> deleteCustomer(@PathVariable int id) {
		userService.removeCustomer(id);
		return ResponseEntity.noContent().build();
	}

	@PutMapping("/verify-account")
	public ResponseEntity<String> verifyAccount(@RequestParam String email, @RequestParam String otp) {
		return new ResponseEntity<>(userService.verifyAccount(email, otp), HttpStatus.OK);
	}

	@PutMapping("/regenerate-otp")
	public ResponseEntity<String> regenerateOtp(@RequestParam String email) {
		return new ResponseEntity<>(userService.regenerateOtp(email), HttpStatus.OK);
	}
}
