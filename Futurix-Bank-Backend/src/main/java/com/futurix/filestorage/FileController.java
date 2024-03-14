package com.futurix.filestorage;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;


@RestController
@RequestMapping("/file")
public class FileController {
	
	@Autowired
	private FileDataService fileDataService;
	
	@PostMapping("/upload")
	public ResponseEntity<?> uploadFileToDatabase(@RequestParam(name = "image") MultipartFile file) throws IllegalStateException, IOException {
		String uploadImage = fileDataService.uploadToFileStorage(file);
		return ResponseEntity.status(HttpStatus.OK)
				.body(uploadImage);
	}
	
	@GetMapping("/download/{fileName}")
	public ResponseEntity<?> downloadFileFromDatabase(@PathVariable String fileName) throws IOException {
		byte[] imageData = fileDataService.downloadImageFromFileSystem(fileName);
		String fileExtension = fileName.substring(fileName.lastIndexOf(".")+1); 
		System.out.println(fileExtension);
		return ResponseEntity.status(HttpStatus.OK)
				.contentType(MediaType.valueOf("image/"+fileExtension))
				.body(imageData);
	}
}
