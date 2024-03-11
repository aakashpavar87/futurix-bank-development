package com.futurix.services.filestorage;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.UUID;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class FileServiceImpl implements FileService {

	@Override
	public String uploadImage(String path, MultipartFile file) {
		// File Name
		String name = file.getOriginalFilename();

		// random name generate

		String randomId = UUID.randomUUID().toString();
		String fileName1 = randomId.concat(name.substring(name.lastIndexOf(".")));

		// Full Path
		String filePath = path + File.separator + fileName1;

		// Create Folder if not exists
		File f = new File(path);
		if (!f.exists()) {
			f.mkdir();
		}

		// File copy
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
