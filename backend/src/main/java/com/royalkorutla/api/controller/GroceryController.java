package com.royalkorutla.api.controller;

import com.royalkorutla.api.dto.ApiResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/grocery")
public class GroceryController {

    @GetMapping("/stores")
    public ResponseEntity<ApiResponse<List<Map<String, Object>>>> getStores() {
        List<Map<String, Object>> stores = List.of(
                Map.of("id", "g1", "name", "Super Mart Grocery", "address", "Gandhi Road, Korutla", "rating", 4.7),
                Map.of("id", "g2", "name", "Laxmi Kirana General Store", "address", "Venkateshwara Colony", "rating", 4.5)
        );
        return ResponseEntity.ok(ApiResponse.success(stores, stores.size(), "Grocery stores retrieved"));
    }

    @GetMapping("/products")
    public ResponseEntity<ApiResponse<List<Map<String, Object>>>> getProducts() {
        List<Map<String, Object>> products = List.of(
                Map.of("id", "gp1", "name", "Sona Masoori Rice 26kg", "price", 1350, "unit", "Bag"),
                Map.of("id", "gp2", "name", "Freedom Sunflower Oil 1L", "price", 140, "unit", "Pouch")
        );
        return ResponseEntity.ok(ApiResponse.success(products, products.size(), "Products retrieved"));
    }

    @PostMapping("/orders")
    public ResponseEntity<ApiResponse<Map<String, Object>>> createOrder(@RequestBody Map<String, Object> req) {
        Map<String, Object> res = Map.of("id", "gro_" + System.currentTimeMillis(), "status", "CONFIRMED");
        return ResponseEntity.ok(ApiResponse.success(res, "Grocery order placed successfully"));
    }
}
