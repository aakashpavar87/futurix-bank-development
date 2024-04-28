package com.futurix.restControllers.kyc;

import java.io.IOException;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.futurix.entities.TblCustomer;
import com.futurix.filestorage.kyc.UserKycDocument;
import com.futurix.repositories.CustomerRepo;
import com.futurix.services.kyc.KycDocsService;

@RestController
@RequestMapping("user/{id}/kyc")
public class UserKycDocsController {

	@Autowired
	private KycDocsService kycDocsService;
	
	@Autowired
	private CustomerRepo customerRepo;
	
	@PutMapping("/upload")
	public ResponseEntity<?> uploadKycDocuments(@PathVariable int id, 
			@RequestParam String aadharCardNumber,
			@RequestParam String panCardNumber,
			@RequestParam MultipartFile aadharCard,
			@RequestParam MultipartFile panCard) throws IllegalStateException, IOException {
		String uploadedKycDocs = kycDocsService.uploadKycDocsToStorage(id, 
				aadharCard, panCard, 
				aadharCardNumber, panCardNumber);
		return ResponseEntity.status(HttpStatus.OK)
				.body(uploadedKycDocs);
	}
	
	@GetMapping("/docs")
	public ResponseEntity<UserKycDocument> getKycDocuments(@PathVariable int id) {
		TblCustomer customer = customerRepo.findById(id).orElseThrow(() -> new RuntimeException("Customer not found"));
		return new ResponseEntity<UserKycDocument>(customer.getUserKycDocument(), HttpStatus.OK); 
	}
	
/*
//	@GetMapping("/download")
//	public ResponseEntity<?> downloadFileFromDatabase(@PathVariable int userId) throws IOException {
//		UserKycDocument docs = userKycDocsService.retrieveKycDocuments(userId);
//		Map<String, byte[]> kycDocsMap = userKycDocsService.downloadKycDocsFromFileSystemById(userId);
//		String aadharCardFileName = docs.getAadharCardFileName();
//		String panCardFileName = docs.getPanCardFileName();
//		String aadharCardExtension = 
//				aadharCardFileName.substring(aadharCardFileName.lastIndexOf(".")+1);
//		String panCardExtension = 
//				panCardFileName.substring(panCardFileName.lastIndexOf(".")+1); 
//		System.out.println(aadharCardExtension);
//		byte[] aadharCard = kycDocsMap.get("aadharCard");
//				
//		return null;
//	}
 *
 */
	
	@GetMapping("/download")
	public ResponseEntity<?> downloadFileFromDatabase(@PathVariable int id) throws IOException {
		UserKycDocument docs = kycDocsService.retrieveKycDocuments(id);
		Map<String, byte[]> kycDocsMap = kycDocsService.downloadKycDocsFromFileSystemById(id);

		byte[] aadharCard = kycDocsMap.get("aadharCard");
		byte[] panCard = kycDocsMap.get("panCard");

		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.MULTIPART_MIXED);

		MultiValueMap<String, Object> body = new LinkedMultiValueMap<>();
		body.add("aadharCard", new HttpEntity<>(aadharCard, getHeaders(docs.getAadharCardFileName())));
		body.add("panCard", new HttpEntity<>(panCard, getHeaders(docs.getPanCardFileName())));

		return new ResponseEntity<>(body, headers, HttpStatus.OK);
	}

	private HttpHeaders getHeaders(String fileName) {
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_PDF);
		headers.setContentDispositionFormData("attachment", fileName);
		return headers;
	}
}
