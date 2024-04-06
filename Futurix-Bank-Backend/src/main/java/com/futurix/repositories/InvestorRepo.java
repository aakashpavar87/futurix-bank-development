package com.futurix.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.futurix.entities.TblInvestor;

public interface InvestorRepo extends JpaRepository<TblInvestor, Integer> {

	Optional<TblInvestor> findByInvestorEmail(String email);

}
