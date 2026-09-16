package com.royalkorutla.api.entity;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;

@Entity
@Table(name = "jobs")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class JobEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    private String category;
    private String shopName;
    private String location;
    private String salary;
    private String jobType;
    private String experience;
    private String phone;
    private String whatsapp;
    private LocalDate postedDate;

    @Column(length = 2000)
    private String description;

    private Boolean isVerified;
}
