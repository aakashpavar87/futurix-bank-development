package com.futurix.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.futurix.entities.TblCard;

public interface CardRepo extends JpaRepository<TblCard, Long> {

}
