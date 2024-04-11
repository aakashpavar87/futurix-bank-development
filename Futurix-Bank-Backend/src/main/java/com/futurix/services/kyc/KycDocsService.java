package com.futurix.services.kyc;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.futurix.entities.TblCustomer;
import com.futurix.filestorage.kyc.UserKycDocument;
import com.futurix.repositories.CustomerRepo;
import com.futurix.repositories.kyc.UserKycDocumentRepo;

@Service
public class KycDocsService {

	private final String AADHAR_FOLDER_PATH = "C:\\Users\\Aakash Pavar\\Desktop\\TYProject\\Backend\\Futurix-Bank-Backend\\AadharCardDocs";

	private final String PANCARD_FOLDER_PATH = "C:\\Users\\Aakash Pavar\\Desktop\\TYProject\\Backend\\Futurix-Bank-Backend\\PanCardDocs";

	@Autowired
	private UserKycDocumentRepo userKycDocumentRepo;

	@Autowired
	private CustomerRepo customerRepo;

	public String uploadKycDocsToStorage(int userId, MultipartFile aadharCardFile, MultipartFile panCardFile,
			String aadharCardNumber, String panCardNumber) throws IllegalStateException, IOException {

		UserKycDocument oldDocs = customerRepo.findById(userId).get().getUserKycDocument();

		if (oldDocs != null) {
			
			String aadharFilePath = AADHAR_FOLDER_PATH + aadharCardFile.getOriginalFilename();

			oldDocs.setAadharCardFileName(aadharCardFile.getOriginalFilename());

			oldDocs.setAadharCardFileType(aadharCardFile.getContentType());

			oldDocs.setAadharCardFilePath(aadharFilePath);

			oldDocs.setAadharCardNumber(aadharCardNumber);

			oldDocs.setPanCardNumber(panCardNumber);

			if (panCardFile != null) {

				String panCardFilePath = PANCARD_FOLDER_PATH + panCardFile.getOriginalFilename();

				oldDocs.setPanCardFileName(panCardFile.getOriginalFilename());

				oldDocs.setPanCardFileType(panCardFile.getContentType());

				oldDocs.setPanCardFilePath(panCardFilePath);

				panCardFile.transferTo(new File(panCardFilePath));

			}

			aadharCardFile.transferTo(new File(aadharFilePath));

			TblCustomer foundCustomer = customerRepo.findById(userId).orElse(null);

			foundCustomer.setUserKycDocument(oldDocs);

			oldDocs.setCustomer(foundCustomer);

//			customerRepo.save(foundCustomer);

			UserKycDocument userKycDocs = userKycDocumentRepo.save(oldDocs);

			if (userKycDocs != null) {
				return "Kyc documents Uploaded Successfully ...";
			}

			return "Some problem occured while performing your kyc :(";
		} else {
			String aadharFilePath = AADHAR_FOLDER_PATH + aadharCardFile.getOriginalFilename();

			UserKycDocument kyc = new UserKycDocument();

			kyc.setAadharCardFileName(aadharCardFile.getOriginalFilename());

			kyc.setAadharCardFileType(aadharCardFile.getContentType());

			kyc.setAadharCardFilePath(aadharFilePath);

			kyc.setAadharCardNumber(aadharCardNumber);

			kyc.setPanCardNumber(panCardNumber);

			if (panCardFile != null) {

				String panCardFilePath = PANCARD_FOLDER_PATH + panCardFile.getOriginalFilename();

				kyc.setPanCardFileName(panCardFile.getOriginalFilename());

				kyc.setPanCardFileType(panCardFile.getContentType());

				kyc.setPanCardFilePath(panCardFilePath);

				panCardFile.transferTo(new File(panCardFilePath));

			}

			aadharCardFile.transferTo(new File(aadharFilePath));

			TblCustomer foundCustomer = customerRepo.findById(userId).orElse(null);

			foundCustomer.setUserKycDocument(kyc);

			kyc.setCustomer(foundCustomer);

//			customerRepo.save(foundCustomer);

			UserKycDocument userKycDocs = userKycDocumentRepo.save(kyc);

			if (userKycDocs != null) {
				return "Kyc documents Uploaded Successfully ...";
			}

			return "Some problem occured while performing your kyc :(";
		}

	}

	public UserKycDocument retrieveKycDocuments(int userId) {
		return customerRepo.findById(userId).get().getUserKycDocument();
	}

	public Map<String, byte[]> downloadKycDocsFromFileSystemById(int id) throws IOException {

		UserKycDocument fileData = customerRepo.findById(id).get().getUserKycDocument();

		String aadharCardFilePath = fileData.getAadharCardFilePath();

		String panCardFilePath = fileData.getPanCardFilePath();

		byte[] aadharCard = Files.readAllBytes(new File(aadharCardFilePath).toPath());

		byte[] panCard = Files.readAllBytes(new File(panCardFilePath).toPath());

		Map<String, byte[]> kycDocsMap = new HashMap<>();

		kycDocsMap.put("panCard", panCard);

		kycDocsMap.put("aadharCard", aadharCard);

		return kycDocsMap;
	}

}