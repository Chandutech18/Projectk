package com.royalkorutla.api.controller;

import com.royalkorutla.api.dto.ApiResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/rewards")
public class RewardController {

    @GetMapping("/points")
    public ResponseEntity<ApiResponse<Map<String, Object>>> getPoints() {
        Map<String, Object> points = Map.of(
                "totalPoints", 320,
                "tier", "Gold Member"
        );
        return ResponseEntity.ok(ApiResponse.success(points, "Royal points retrieved"));
    }

    @GetMapping("/vouchers")
    public ResponseEntity<ApiResponse<List<Map<String, Object>>>> getVouchers() {
        List<Map<String, Object>> vouchers = List.of(
                Map.of("id", "v1", "title", "₹100 Off on Food Orders", "pointsCost", 100, "code", "FOOD100"),
                Map.of("id", "v2", "title", "Free Health Checkup Coupon", "pointsCost", 200, "code", "HEALTHFREE")
        );
        return ResponseEntity.ok(ApiResponse.success(vouchers, vouchers.size(), "Vouchers retrieved"));
    }

    @PostMapping("/vouchers")
    public ResponseEntity<ApiResponse<Map<String, String>>> redeemVoucher(@RequestBody Map<String, String> req) {
        return ResponseEntity.ok(ApiResponse.success(
                Map.of("couponCode", "ROYAL" + (1000 + (int)(Math.random() * 9000))),
                "Voucher redeemed successfully"
        ));
    }
}
