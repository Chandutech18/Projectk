package com.royalkorutla.api.repository;

import com.royalkorutla.api.entity.RealEstateEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RealEstateRepository extends JpaRepository<RealEstateEntity, Long> {
    List<RealEstateEntity> findByPurposeTypeIgnoreCase(String purposeType);
    List<RealEstateEntity> findByCategoryIgnoreCase(String category);
}
