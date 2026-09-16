package com.royalkorutla.api.controller;

import com.royalkorutla.api.dto.ApiResponse;
import com.royalkorutla.api.entity.HospitalEntity;
import com.royalkorutla.api.repository.HospitalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/hospitals")
public class HospitalController {

    private final HospitalRepository hospitalRepository;

    @Autowired
    public HospitalController(HospitalRepository hospitalRepository) {
        this.hospitalRepository = hospitalRepository;
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<HospitalEntity>>> getHospitals() {
        List<HospitalEntity> list = hospitalRepository.findAll();
        return ResponseEntity.ok(ApiResponse.success(list, list.size(), "Hospitals retrieved successfully"));
    }
}
