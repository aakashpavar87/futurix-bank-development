package com.futurix.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.futurix.entities.TblAdmin;

public interface AdminRepo extends JpaRepository<TblAdmin, Integer> {

	Optional<TblAdmin> findByAdminEmail(String email);

}
