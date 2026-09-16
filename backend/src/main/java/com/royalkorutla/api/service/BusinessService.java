package com.royalkorutla.api.service;

import com.royalkorutla.api.entity.BusinessEntity;
import com.royalkorutla.api.repository.BusinessRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BusinessService {

    private final BusinessRepository businessRepository;

    @Autowired
    public BusinessService(BusinessRepository businessRepository) {
        this.businessRepository = businessRepository;
    }

    public List<BusinessEntity> getAllBusinesses(String category, String query) {
        if (category != null && !category.isEmpty() && !"all".equalsIgnoreCase(category)) {
            return businessRepository.findByCategorySlug(category);
        }
        if (query != null && !query.isEmpty()) {
            return businessRepository.findByNameContainingIgnoreCaseOrAddressContainingIgnoreCase(query, query);
        }
        return businessRepository.findAll();
    }

    public List<BusinessEntity> getFeaturedBusinesses() {
        return businessRepository.findByIsFeaturedTrue();
    }

    public BusinessEntity saveBusiness(BusinessEntity business) {
        return businessRepository.save(business);
    }
}
