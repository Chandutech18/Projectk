package com.royalkorutla.api.controller;

import com.royalkorutla.api.dto.ApiResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/services")
public class ServicesController {

    @GetMapping
    public ResponseEntity<ApiResponse<List<Map<String, Object>>>> getServices() {
        List<Map<String, Object>> services = List.of(
                Map.of("id", 1, "name", "Sai Electricals & Plumbers", "category", "Electrician", "phone", "9848011223", "area", "Tower Clock Circle", "rating", 4.8),
                Map.of("id", 2, "name", "Korutla AC Repair & Service", "category", "AC Repair", "phone", "9988776655", "area", "New Bus Stand", "rating", 4.7)
        );
        return ResponseEntity.ok(ApiResponse.success(services, services.size(), "Services retrieved successfully"));
    }
}
