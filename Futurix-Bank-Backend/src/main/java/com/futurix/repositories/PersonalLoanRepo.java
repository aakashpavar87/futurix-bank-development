package com.futurix.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.futurix.entities.TblPersonal_Loan;

public interface PersonalLoanRepo extends JpaRepository<TblPersonal_Loan, Integer> {

}
