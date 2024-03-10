package com.futurix.services.impl;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.futurix.services.FileService;

@Service
public class FileServiceImpl implements FileService{

		@Override
		public String uploadImage(String path , MultipartFile file) {
			
			// File Name
			String name = file.getOriginalFilename();
			
			//Full Path
			String filePath = path + File.separator + file;
			
			//Create Folder if not exists
			File f = new File(path);
			if(!f.exists()) {
				f.mkdir();
			}
			
			//File copy
			try {
				Files.copy(file.getInputStream(), Paths.get(filePath));
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			System.out.println("some error at copy file");
			}
			
			
			return name;
		}
}
