package com.futurix.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.futurix.entities.TblInvestor;

public interface InvestorRepo extends JpaRepository<TblInvestor, Integer> {

}
