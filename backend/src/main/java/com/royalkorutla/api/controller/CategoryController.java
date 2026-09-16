package com.royalkorutla.api.controller;

import com.royalkorutla.api.dto.ApiResponse;
import com.royalkorutla.api.entity.CategoryEntity;
import com.royalkorutla.api.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/categories")
public class CategoryController {

    private final CategoryRepository categoryRepository;

    @Autowired
    public CategoryController(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<CategoryEntity>>> getCategories() {
        List<CategoryEntity> list = categoryRepository.findAll();
        return ResponseEntity.ok(ApiResponse.success(list, list.size(), "Categories retrieved successfully"));
    }
}
