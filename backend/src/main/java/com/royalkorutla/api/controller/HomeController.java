package com.royalkorutla.api.controller;

import com.royalkorutla.api.dto.ApiResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.LinkedHashMap;
import java.util.Map;

@RestController
public class HomeController {

    @GetMapping(value = {"/", "/api", ""})
    public ResponseEntity<ApiResponse<Map<String, Object>>> getApiIndex() {
        Map<String, Object> index = new LinkedHashMap<>();
        index.put("platform", "Royal Korutla Backend REST API");
        index.put("status", "UP & RUNNING");
        index.put("version", "1.0.0");
        index.put("port", 8080);
        index.put("h2Console", "http://localhost:8080/h2-console");

        Map<String, String> endpoints = new LinkedHashMap<>();
        endpoints.put("GET /", "API Index (this page)");
        endpoints.put("POST /auth/send-otp", "Send OTP");
        endpoints.put("POST /auth/verify-otp", "Verify OTP & Login");
        endpoints.put("POST /auth/logout", "Logout");
        endpoints.put("GET /auth/me", "Current User Profile");
        endpoints.put("GET /businesses", "List & Filter Businesses");
        endpoints.put("POST /businesses", "Register New Business");
        endpoints.put("GET /categories", "List All Categories");
        endpoints.put("GET /services", "List Service Providers");
        endpoints.put("GET /food/restaurants", "List Restaurants");
        endpoints.put("GET /food/menu", "Food Menu Items");
        endpoints.put("POST /food/orders", "Place Food Order");
        endpoints.put("GET /grocery/stores", "Grocery Stores");
        endpoints.put("GET /grocery/products", "Grocery Products");
        endpoints.put("POST /grocery/orders", "Place Grocery Order");
        endpoints.put("GET /hospitals", "Hospitals & Clinics");
        endpoints.put("GET /doctors", "Doctors Directory");
        endpoints.put("GET /jobs", "Local Job Listings");
        endpoints.put("POST /jobs", "Post a Job");
        endpoints.put("GET /real-estate", "Property Listings");
        endpoints.put("POST /real-estate", "List a Property");
        endpoints.put("GET /promotions", "Active Promotions");
        endpoints.put("GET /offers", "Local Deals & Offers");
        endpoints.put("GET /rewards/points", "User Reward Points");
        endpoints.put("GET /rewards/vouchers", "Reward Vouchers");
        endpoints.put("POST /rewards/vouchers", "Redeem Voucher");
        endpoints.put("POST /payments/create", "Create Payment Order");
        endpoints.put("POST /payments/webhook", "Payment Webhook");

        index.put("endpoints", endpoints);

        return ResponseEntity.ok(ApiResponse.success(index, "Welcome to Royal Korutla Backend API"));
    }
}
