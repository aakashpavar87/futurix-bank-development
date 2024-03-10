package com.futurix.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.futurix.entities.TblAddress;

public interface AddressRepo extends JpaRepository<TblAddress, Integer> {

}
