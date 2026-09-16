package com.royalkorutla.api.controller;

import com.royalkorutla.api.dto.ApiResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/subscriptions")
public class SubscriptionController {

    private static final List<Map<String, Object>> PLANS = List.of(
        Map.of("id", "sub_basic", "name", "Starter Business Plan", "price", 499,
               "validity", "1 Month", "features", List.of("Verified Blue Tick", "Top Search Priority", "Direct WhatsApp Button")),
        Map.of("id", "sub_gold", "name", "Gold Growth Plan", "price", 1299,
               "validity", "3 Months", "features", List.of("All Starter Features", "Hero Carousel Feature", "Push Notifications to Users")),
        Map.of("id", "sub_royal", "name", "Royal Platinum VIP", "price", 3999,
               "validity", "1 Year", "features", List.of("All Gold Features", "Dedicated Account Manager", "Custom Video Story/Reel Spot"))
    );

    @GetMapping
    public ResponseEntity<ApiResponse<List<Map<String, Object>>>> getPlans() {
        return ResponseEntity.ok(ApiResponse.success(PLANS, PLANS.size(), "Subscription plans retrieved"));
    }

    @PostMapping
    public ResponseEntity<ApiResponse<Map<String, Object>>> subscribe(@RequestBody Map<String, String> req) {
        String planId = req.getOrDefault("planId", "");
        String businessId = req.getOrDefault("businessId", "");
        if (planId.isEmpty() || businessId.isEmpty()) {
            return ResponseEntity.badRequest().body(ApiResponse.error("planId and businessId are required"));
        }
        return ResponseEntity.ok(ApiResponse.success(
            Map.of("subscriptionId", "sub_active_" + System.currentTimeMillis(), "status", "PENDING_PAYMENT"),
            "Subscription request initiated"
        ));
    }
}
