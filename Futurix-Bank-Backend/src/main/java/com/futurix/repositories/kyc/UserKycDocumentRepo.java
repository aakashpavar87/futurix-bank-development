package com.futurix.repositories.kyc;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.futurix.filestorage.kyc.UserKycDocument;

@Repository
public interface UserKycDocumentRepo extends JpaRepository<UserKycDocument, Integer> {
}
