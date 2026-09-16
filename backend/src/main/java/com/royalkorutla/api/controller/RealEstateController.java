package com.royalkorutla.api.controller;

import com.royalkorutla.api.dto.ApiResponse;
import com.royalkorutla.api.entity.RealEstateEntity;
import com.royalkorutla.api.repository.RealEstateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/real-estate")
public class RealEstateController {

    private final RealEstateRepository realEstateRepository;

    @Autowired
    public RealEstateController(RealEstateRepository realEstateRepository) {
        this.realEstateRepository = realEstateRepository;
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<RealEstateEntity>>> getProperties() {
        List<RealEstateEntity> list = realEstateRepository.findAll();
        return ResponseEntity.ok(ApiResponse.success(list, list.size(), "Properties retrieved successfully"));
    }

    @PostMapping
    public ResponseEntity<ApiResponse<RealEstateEntity>> createProperty(@RequestBody RealEstateEntity property) {
        RealEstateEntity saved = realEstateRepository.save(property);
        return ResponseEntity.ok(ApiResponse.success(saved, "Property listed successfully"));
    }
}
