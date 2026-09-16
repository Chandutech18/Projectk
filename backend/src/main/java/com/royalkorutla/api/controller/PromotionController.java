package com.royalkorutla.api.controller;

import com.royalkorutla.api.dto.ApiResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/promotions")
public class PromotionController {

    @GetMapping
    public ResponseEntity<ApiResponse<List<Map<String, Object>>>> getPromotions() {
        List<Map<String, Object>> promotions = List.of(
                Map.of("id", "p1", "businessName", "Royal Family Restaurant", "status", "ACTIVE",
                        "title", "Grand Biryani Festival Offer", "offerText", "20% off on all Biryani orders above ₹300",
                        "priority", 1),
                Map.of("id", "p2", "businessName", "Sai Laxmi Kirana", "status", "ACTIVE",
                        "title", "Grocery Bonanza Sale", "offerText", "Free delivery on orders above ₹500",
                        "priority", 2)
        );
        return ResponseEntity.ok(ApiResponse.success(promotions, promotions.size(), "Active promotions retrieved"));
    }
}
