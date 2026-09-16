package com.royalkorutla.api.controller;

import com.royalkorutla.api.dto.ApiResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/reviews")
public class ReviewController {

    private static final List<Map<String, Object>> REVIEWS = new ArrayList<>(List.of(
        Map.of("id", "rev1", "businessId", "b1", "userName", "Rajesh K.", "rating", 5,
               "comment", "Best biryani in Korutla! Authentic taste and great service.", "date", "2026-03-10"),
        Map.of("id", "rev2", "businessId", "b2", "userName", "Sravanthi G.", "rating", 5,
               "comment", "Dr. Srinivas is very knowledgeable. Highly recommended hospital.", "date", "2026-03-12"),
        Map.of("id", "rev3", "businessId", "b1", "userName", "Kiran R.", "rating", 4,
               "comment", "Good food, nice ambience. Portion size could be bigger.", "date", "2026-03-18")
    ));

    @GetMapping
    public ResponseEntity<ApiResponse<List<Map<String, Object>>>> getReviews(
            @RequestParam(required = false) String businessId) {
        List<Map<String, Object>> list = REVIEWS;
        if (businessId != null && !businessId.isEmpty()) {
            list = REVIEWS.stream()
                .filter(r -> businessId.equals(r.get("businessId")))
                .toList();
        }
        return ResponseEntity.ok(ApiResponse.success(list, list.size(), "Reviews retrieved successfully"));
    }

    @PostMapping
    public ResponseEntity<ApiResponse<Map<String, Object>>> createReview(@RequestBody Map<String, Object> req) {
        String businessId = (String) req.getOrDefault("businessId", "");
        String comment = (String) req.getOrDefault("comment", "");
        if (businessId.isEmpty() || comment.isEmpty()) {
            return ResponseEntity.badRequest().body(ApiResponse.error("businessId and comment are required"));
        }
        Map<String, Object> newReview = new java.util.LinkedHashMap<>();
        newReview.put("id", "rev_" + System.currentTimeMillis());
        newReview.put("businessId", businessId);
        newReview.put("userName", req.getOrDefault("userName", "Korutla User"));
        newReview.put("rating", req.getOrDefault("rating", 5));
        newReview.put("comment", comment);
        newReview.put("date", java.time.LocalDate.now().toString());
        REVIEWS.add(0, newReview);
        return ResponseEntity.ok(ApiResponse.success(newReview, "Review submitted successfully"));
    }
}
