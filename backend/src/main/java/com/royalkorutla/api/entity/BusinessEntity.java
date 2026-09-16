package com.royalkorutla.api.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "businesses")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BusinessEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String categorySlug;

    private String subCategory;
    private Double rating;
    private Integer reviewCount;
    private String address;
    private String landmark;
    private String phone;
    private String whatsapp;
    private String timing;
    private Boolean isVerified;
    private Boolean isFeatured;

    @Column(length = 1000)
    private String image;

    @Column(length = 2000)
    private String description;

    private String priceRange;
    private String ownerName;
}
