package com.futurix.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.futurix.entities.TblLoan;

public interface LoanRepo extends JpaRepository<TblLoan, Integer> {

}
