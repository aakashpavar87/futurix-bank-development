package com.futurix.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.futurix.entities.TblDebitCard;

public interface DebitCardRepo extends JpaRepository<TblDebitCard, Integer> {

}
