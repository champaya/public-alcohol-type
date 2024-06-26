package com.example.portfolio.repository;
import com.example.portfolio.Entity.ResultEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ResultRepository extends JpaRepository<ResultEntity, String> {
List<ResultEntity> findAllByOrderByTypeInitial();
}
