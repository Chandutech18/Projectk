package com.royalkorutla.api.controller;

import com.royalkorutla.api.dto.ApiResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/offers")
public class OfferController {

    @GetMapping
    public ResponseEntity<ApiResponse<List<Map<String, Object>>>> getOffers() {
        List<Map<String, Object>> offers = List.of(
                Map.of("id", "o1", "title", "Buy 1 Get 1 on Biryani", "discount", "50%",
                        "businessName", "Royal Family Restaurant", "expiry", "2026-10-31"),
                Map.of("id", "o2", "title", "Flat ₹200 off on Sarees", "discount", "₹200",
                        "businessName", "Laxmi Textiles", "expiry", "2026-09-30")
        );
        return ResponseEntity.ok(ApiResponse.success(offers, offers.size(), "Offers retrieved successfully"));
    }
}
