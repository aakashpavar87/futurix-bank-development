package com.futurix.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.futurix.entities.TblCurrent_Account;

public interface CurrentAccountRepo extends JpaRepository<TblCurrent_Account, Long> {

}
