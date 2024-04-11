package com.futurix.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.futurix.entities.TblBankBalance;

public interface BankBalanceRepo extends JpaRepository<TblBankBalance, Long> {

}
