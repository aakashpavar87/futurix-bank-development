package com.futurix.services.filestorage.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.futurix.services.filestorage.FileService;
import com.futurix.services.filestorage.response.FileResponse;

@RestController
@RequestMapping("/file")
public class FileController {
	@Autowired
	private FileService fileService;
	
	@Value("${project.image}")
	private String path;
	
	@PostMapping("/upload")
	public ResponseEntity<FileResponse> fileUpload(
	   @RequestParam("image")MultipartFile image 
	){
		String fileName = null;
		try {
			
			fileName =	this.fileService.uploadImage(path, image);
		}
		catch(Exception e) {
			e.printStackTrace();
			return new ResponseEntity<>(new FileResponse(null, "Image is not uploaded!") , HttpStatus.INTERNAL_SERVER_ERROR);
			
		}
		return new ResponseEntity<>(new FileResponse(fileName , "Image is successfully uploaded!") , HttpStatus.OK);	
	
	}

}
