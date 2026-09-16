package com.royalkorutla.api.controller;

import com.royalkorutla.api.dto.ApiResponse;
import com.royalkorutla.api.entity.DoctorEntity;
import com.royalkorutla.api.repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/doctors")
public class DoctorController {

    private final DoctorRepository doctorRepository;

    @Autowired
    public DoctorController(DoctorRepository doctorRepository) {
        this.doctorRepository = doctorRepository;
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<DoctorEntity>>> getDoctors() {
        List<DoctorEntity> list = doctorRepository.findAll();
        return ResponseEntity.ok(ApiResponse.success(list, list.size(), "Doctors retrieved successfully"));
    }
}
