package com.royalkorutla.api.controller;

import com.royalkorutla.api.dto.ApiResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/food")
public class FoodController {

    @GetMapping("/restaurants")
    public ResponseEntity<ApiResponse<List<Map<String, Object>>>> getRestaurants() {
        List<Map<String, Object>> list = List.of(
                Map.of("id", "f1", "name", "Royal Family Restaurant & Biryani", "rating", 4.8, "cuisine", "Biryani, North Indian", "address", "Main Road, Korutla"),
                Map.of("id", "f2", "name", "Sri Laxmi Tiffin Center", "rating", 4.6, "cuisine", "South Indian Tiffins", "address", "Tower Clock Circle, Korutla")
        );
        return ResponseEntity.ok(ApiResponse.success(list, list.size(), "Restaurants retrieved"));
    }

    @GetMapping("/menu")
    public ResponseEntity<ApiResponse<List<Map<String, Object>>>> getMenu(@RequestParam(required = false) String restaurantId) {
        List<Map<String, Object>> menu = List.of(
                Map.of("id", "m1", "name", "Special Chicken Dum Biryani", "price", 280, "isVeg", false, "rating", 4.9),
                Map.of("id", "m2", "name", "Paneer Butter Masala", "price", 220, "isVeg", true, "rating", 4.7)
        );
        return ResponseEntity.ok(ApiResponse.success(menu, menu.size(), "Menu retrieved"));
    }

    @PostMapping("/orders")
    public ResponseEntity<ApiResponse<Map<String, Object>>> createOrder(@RequestBody Map<String, Object> orderReq) {
        Map<String, Object> order = Map.of(
                "orderId", "fod_" + System.currentTimeMillis(),
                "status", "PLACED",
                "totalAmount", orderReq.getOrDefault("totalAmount", 500)
        );
        return ResponseEntity.ok(ApiResponse.success(order, "Food order placed successfully"));
    }
}
