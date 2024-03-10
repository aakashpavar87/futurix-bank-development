package com.futurix.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.futurix.entities.TblSaving_account;

public interface SavingAccountRepo extends JpaRepository<TblSaving_account, Long> {

}
