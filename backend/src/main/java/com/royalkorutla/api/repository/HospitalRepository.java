package com.royalkorutla.api.repository;

import com.royalkorutla.api.entity.HospitalEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HospitalRepository extends JpaRepository<HospitalEntity, Long> {
    List<HospitalEntity> findByIs24x7True();
}
