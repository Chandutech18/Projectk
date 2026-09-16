package com.royalkorutla.api.controller;

import com.royalkorutla.api.dto.ApiResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @PostMapping("/send-otp")
    public ResponseEntity<ApiResponse<Map<String, String>>> sendOtp(@RequestBody Map<String, String> request) {
        String phone = request.get("phone");
        if (phone == null || phone.length() < 10) {
            return ResponseEntity.badRequest().body(ApiResponse.error("Valid 10-digit mobile number is required"));
        }
        return ResponseEntity.ok(ApiResponse.success(
                Map.of("phone", phone, "devOtp", "123456"),
                "OTP sent successfully to +91 " + phone
        ));
    }

    @PostMapping("/verify-otp")
    public ResponseEntity<ApiResponse<Map<String, Object>>> verifyOtp(@RequestBody Map<String, String> request) {
        String phone = request.get("phone");
        String otp = request.get("otp");

        if (otp == null || !"123456".equals(otp)) {
            return ResponseEntity.badRequest().body(ApiResponse.error("Invalid OTP. Use 123456 for demo"));
        }

        String token = "jwt_token_" + UUID.randomUUID().toString();
        Map<String, Object> user = Map.of(
                "id", "usr_" + System.currentTimeMillis(),
                "name", request.getOrDefault("name", "Korutla Resident"),
                "phone", phone,
                "role", "USER",
                "rewardPoints", 150
        );

        return ResponseEntity.ok(ApiResponse.success(
                Map.of("token", token, "user", user),
                "OTP verified successfully"
        ));
    }

    @PostMapping("/logout")
    public ResponseEntity<ApiResponse<Void>> logout() {
        return ResponseEntity.ok(ApiResponse.success(null, "Logged out successfully"));
    }

    @GetMapping("/me")
    public ResponseEntity<ApiResponse<Map<String, Object>>> getProfile() {
        Map<String, Object> user = Map.of(
                "id", "usr_demo_123",
                "name", "Royal Korutla Resident",
                "phone", "9876543210",
                "rewardPoints", 250
        );
        return ResponseEntity.ok(ApiResponse.success(user, "User profile retrieved"));
    }
}
