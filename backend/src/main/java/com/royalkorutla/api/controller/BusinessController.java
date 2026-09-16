package com.royalkorutla.api.controller;

import com.royalkorutla.api.dto.ApiResponse;
import com.royalkorutla.api.entity.BusinessEntity;
import com.royalkorutla.api.service.BusinessService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/businesses")
public class BusinessController {

    private final BusinessService businessService;

    @Autowired
    public BusinessController(BusinessService businessService) {
        this.businessService = businessService;
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<BusinessEntity>>> getBusinesses(
            @RequestParam(required = false) String category,
            @RequestParam(required = false) String q) {

        List<BusinessEntity> list = businessService.getAllBusinesses(category, q);
        return ResponseEntity.ok(ApiResponse.success(list, list.size(), "Businesses retrieved successfully"));
    }

    @PostMapping
    public ResponseEntity<ApiResponse<BusinessEntity>> createBusiness(@RequestBody BusinessEntity business) {
        BusinessEntity saved = businessService.saveBusiness(business);
        return ResponseEntity.ok(ApiResponse.success(saved, "Business registered successfully"));
    }
}
