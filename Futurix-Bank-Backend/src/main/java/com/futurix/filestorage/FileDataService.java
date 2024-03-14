package com.futurix.filestorage;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class FileDataService {
	
	private final String FOLDER_PATH = "C:\\Users\\DELL\\OneDrive\\Desktop\\TYProject\\futurix-bank-development\\Futurix-Bank-Backend\\documents\\"; 
	
	@Autowired
	private FileDataRepo fIleDataRepo;
	
	public String uploadToFileStorage(MultipartFile file) throws IllegalStateException, IOException {
		
		String filePath = FOLDER_PATH+file.getOriginalFilename();		
		FileData newFileData = new FileData();
		newFileData.setName(file.getOriginalFilename());
		newFileData.setType(file.getContentType());
		newFileData.setFilePath(filePath);
		FileData fileData = fIleDataRepo.save(newFileData);
		
		file.transferTo(new File(filePath));
		
		if(fileData != null) {
			return "Image uploaded successfully file name : "+filePath;
		}
		
		return null;
	}
	
	public byte[] downloadImageFromFileSystem(String fileName) throws IOException {
        Optional<FileData> fileData = fIleDataRepo.findByName(fileName);
        String filePath=fileData.get().getFilePath();
        byte[] images = Files.readAllBytes(new File(filePath).toPath());
        return images;
    }
}