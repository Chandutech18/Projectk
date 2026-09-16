DROP TABLE IF EXISTS real_estate;
DROP TABLE IF EXISTS jobs;
DROP TABLE IF EXISTS doctors;
DROP TABLE IF EXISTS hospitals;
DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS businesses;

CREATE TABLE businesses (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category_slug VARCHAR(100) NOT NULL,
    sub_category VARCHAR(100),
    rating DOUBLE,
    review_count INT,
    address VARCHAR(255),
    landmark VARCHAR(255),
    phone VARCHAR(50),
    whatsapp VARCHAR(50),
    timing VARCHAR(100),
    is_verified BOOLEAN,
    is_featured BOOLEAN,
    image VARCHAR(1000),
    description VARCHAR(2000),
    price_range VARCHAR(50),
    owner_name VARCHAR(100)
);

CREATE TABLE categories (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    slug VARCHAR(100) NOT NULL UNIQUE,
    name VARCHAR(100) NOT NULL,
    icon_name VARCHAR(50),
    description VARCHAR(255),
    item_count INT,
    badge VARCHAR(50),
    color_gradient VARCHAR(100)
);

CREATE TABLE hospitals (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    tagline VARCHAR(255),
    address VARCHAR(255),
    landmark VARCHAR(255),
    emergency_phone VARCHAR(50),
    appointment_phone VARCHAR(50),
    timing VARCHAR(100),
    image VARCHAR(1000),
    is24x7 BOOLEAN,
    departments VARCHAR(500)
);

CREATE TABLE doctors (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    qualification VARCHAR(100),
    specialization VARCHAR(100),
    experience_years INT,
    hospital_name VARCHAR(255),
    hospital_address VARCHAR(255),
    timings VARCHAR(100),
    consultation_fee VARCHAR(50),
    phone VARCHAR(50),
    whatsapp VARCHAR(50),
    image VARCHAR(1000)
);

CREATE TABLE jobs (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    category VARCHAR(100),
    shop_name VARCHAR(255),
    location VARCHAR(255),
    salary VARCHAR(100),
    job_type VARCHAR(50),
    experience VARCHAR(50),
    phone VARCHAR(50),
    whatsapp VARCHAR(50),
    posted_date DATE,
    description VARCHAR(2000),
    is_verified BOOLEAN
);

CREATE TABLE real_estate (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    purpose_type VARCHAR(50),
    category VARCHAR(50),
    price VARCHAR(100),
    area_sqft INT,
    location VARCHAR(255),
    owner_name VARCHAR(100),
    owner_phone VARCHAR(50),
    whatsapp VARCHAR(50),
    posted_date DATE,
    is_verified BOOLEAN,
    image VARCHAR(1000)
);
