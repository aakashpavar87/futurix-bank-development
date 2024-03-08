package com.futurix.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.futurix.entities.TblTransaction;

public interface TransactionRepo extends JpaRepository<TblTransaction, Integer> {

}
