package com.royalkorutla.api.repository;

import com.royalkorutla.api.entity.DoctorEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DoctorRepository extends JpaRepository<DoctorEntity, Long> {
    List<DoctorEntity> findBySpecializationContainingIgnoreCase(String specialization);
}
