package com.royalkorutla.api.controller;

import com.royalkorutla.api.dto.ApiResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/payments")
public class PaymentController {

    @PostMapping("/create")
    public ResponseEntity<ApiResponse<Map<String, Object>>> createPayment(@RequestBody Map<String, Object> req) {
        Double amount = Double.parseDouble(req.getOrDefault("amount", 100.0).toString());
        Map<String, Object> order = Map.of(
                "orderId", "order_rzp_" + UUID.randomUUID().toString().substring(0, 8),
                "amount", (int)(amount * 100),
                "currency", "INR",
                "keyId", "rzp_test_mockkey123"
        );
        return ResponseEntity.ok(ApiResponse.success(order, "Payment gateway order created"));
    }

    @PostMapping("/webhook")
    public ResponseEntity<ApiResponse<Map<String, String>>> handleWebhook(@RequestBody String payload) {
        return ResponseEntity.ok(ApiResponse.success(Map.of("status", "PROCESSED"), "Webhook processed successfully"));
    }
}
