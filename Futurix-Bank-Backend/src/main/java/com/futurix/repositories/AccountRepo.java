package com.futurix.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.futurix.entities.TblAccount;


public interface AccountRepo extends JpaRepository<TblAccount, Integer> {
	TblAccount findByAccountnumber(long accountnumber);
}
