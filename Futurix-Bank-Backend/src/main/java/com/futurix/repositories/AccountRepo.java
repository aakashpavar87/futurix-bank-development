package com.futurix.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import com.futurix.entities.TblAccount;


public interface AccountRepo extends JpaRepository<TblAccount, Integer> {
	
	@Transactional
    void deleteById(int id);
	TblAccount findByAccountnumber(long accountnumber);
}
