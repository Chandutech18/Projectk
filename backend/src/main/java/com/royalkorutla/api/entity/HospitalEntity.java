package com.royalkorutla.api.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "hospitals")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class HospitalEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    private String tagline;
    private String address;
    private String landmark;
    private String emergencyPhone;
    private String appointmentPhone;
    private String timing;
    private String image;
    private Boolean is24x7;
    private String departments;
}
