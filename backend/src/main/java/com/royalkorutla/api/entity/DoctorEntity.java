package com.royalkorutla.api.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "doctors")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DoctorEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    private String qualification;
    private String specialization;
    private Integer experienceYears;
    private String hospitalName;
    private String hospitalAddress;
    private String timings;
    private String consultationFee;
    private String phone;
    private String whatsapp;
    private String image;
}
