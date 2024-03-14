package com.futurix.filestorage;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;


public interface FileDataRepo extends JpaRepository<FileData, Integer> {

	Optional<FileData> findByName(String fileName);

}
