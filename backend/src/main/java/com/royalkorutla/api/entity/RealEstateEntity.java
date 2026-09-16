package com.royalkorutla.api.entity;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;

@Entity
@Table(name = "real_estate")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RealEstateEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    private String purposeType; // Buy / Rent / Lease
    private String category;    // Plot / House / Commercial
    private String price;
    private Integer areaSqft;
    private String location;
    private String ownerName;
    private String ownerPhone;
    private String whatsapp;
    private LocalDate postedDate;
    private Boolean isVerified;

    @Column(length = 1000)
    private String image;
}
