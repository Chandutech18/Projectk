package com.royalkorutla.api.controller;

import com.royalkorutla.api.dto.ApiResponse;
import com.royalkorutla.api.entity.JobEntity;
import com.royalkorutla.api.repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/jobs")
public class JobController {

    private final JobRepository jobRepository;

    @Autowired
    public JobController(JobRepository jobRepository) {
        this.jobRepository = jobRepository;
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<JobEntity>>> getJobs() {
        List<JobEntity> list = jobRepository.findAll();
        return ResponseEntity.ok(ApiResponse.success(list, list.size(), "Jobs retrieved successfully"));
    }

    @PostMapping
    public ResponseEntity<ApiResponse<JobEntity>> createJob(@RequestBody JobEntity job) {
        JobEntity saved = jobRepository.save(job);
        return ResponseEntity.ok(ApiResponse.success(saved, "Job posting created successfully"));
    }
}
