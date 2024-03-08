package com.futurix.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.futurix.entities.TblInvestment;

public interface InvestmentRepo extends JpaRepository<TblInvestment, Integer> {

}
