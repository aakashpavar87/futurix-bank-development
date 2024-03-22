package com.futurix.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.futurix.entities.TblCustomer;

public interface CustomerRepo extends JpaRepository<TblCustomer, Integer> {

	Optional<TblCustomer> findByEmail(String email);

}
