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

import com.futurix.entities.TblInvestor;
import com.futurix.filestorage.FileDataService;
import com.futurix.services.InvestorService;

@RestController
public class InvestorController {
	@Autowired
	private InvestorService investorService;
	
	@Autowired
	private FileDataService fileDataService;
	
	@GetMapping("/investor/{investorId}")
	public TblInvestor retrieveInvestor(@PathVariable int investorId) {
		return investorService.getInvestor(investorId);
	}
	
	@GetMapping("/investor/email/{email}")
	public TblInvestor retrieveByEmail(@PathVariable String email) {
		return investorService.getInvestorByEmail(email);
	}
	
	@GetMapping("/investors")
	public List<TblInvestor> retrieveAllInvestor() {
		return investorService.getAllInvestor();
	}
	
	@PostMapping("/investor")
	public ResponseEntity<TblInvestor> addInvestor(@RequestBody TblInvestor investor) {
		investorService.addInvestor(investor);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{investmentId}")
				.buildAndExpand(investor.getId())
				.toUri();
		return ResponseEntity.created(location ).build();
	}
	
	@GetMapping("/investor/{id}/profileImage")
	public ResponseEntity<?> getProfilemageFromDatabase(@PathVariable int id) throws IOException {
		
		byte[] imageData = fileDataService.downloadInvestorImageFromFileSystemById(id);
		
		return ResponseEntity.status(HttpStatus.OK)
				.contentType(MediaType.valueOf("image/jpg"))
				.body(imageData);
	}
	
	@PutMapping("/investor/{id}/profileImage")
	public ResponseEntity<TblInvestor> addProfileImage(@PathVariable int id, @RequestParam(name = "image") MultipartFile file) throws IllegalStateException, IOException{
		return new ResponseEntity<TblInvestor>(investorService.addProfileImage(id, file), HttpStatus.ACCEPTED);
	}
	
	@PutMapping("/investor/{investorId}")
	public ResponseEntity<Void> updateOneInvestor(@PathVariable int investorId, @RequestBody TblInvestor investor) {
		investorService.updateInvestor(investor, investorId);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{investmentId}")
				.buildAndExpand(investor.getId())
				.toUri();
		return ResponseEntity.created(location ).build();
	}
	
	@DeleteMapping("/investor/{investorId}")
	public ResponseEntity<Void> removeInvestor(@PathVariable int investorId) {
		investorService.deleteInvestor(investorId);
		return ResponseEntity.noContent().build();
	}
}
