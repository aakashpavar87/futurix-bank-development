package com.futurix.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.futurix.entities.TblFeedback;

public interface FeedbackRepo extends JpaRepository<TblFeedback, Integer> {

}
