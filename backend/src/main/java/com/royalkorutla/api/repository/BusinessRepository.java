package com.royalkorutla.api.repository;

import com.royalkorutla.api.entity.BusinessEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BusinessRepository extends JpaRepository<BusinessEntity, Long> {
    List<BusinessEntity> findByCategorySlug(String categorySlug);
    List<BusinessEntity> findByNameContainingIgnoreCaseOrAddressContainingIgnoreCase(String name, String address);
    List<BusinessEntity> findByIsFeaturedTrue();
}
