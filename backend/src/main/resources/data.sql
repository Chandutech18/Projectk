INSERT INTO categories (slug, name, icon_name, description, item_count, badge, color_gradient) VALUES
('food', 'Food & Dining', 'Utensils', 'Restaurants, Biryani, Tiffins & Bakeries in Korutla', 42, 'Popular', 'from-amber-500 to-red-600'),
('groceries', 'Groceries & Kirana', 'ShoppingBag', 'Daily Staples, Rice, Edible Oil & Supermarkets', 38, 'Fast Delivery', 'from-emerald-500 to-teal-700'),
('hospitals', 'Hospitals & Healthcare', 'HeartPulse', '24x7 Emergency Hospitals, Clinics & Specialists', 25, 'Emergency', 'from-rose-500 to-red-700'),
('services', 'Local Services', 'Wrench', 'Plumbers, Electricians, AC Technicians & Mechanics', 64, 'Verified', 'from-blue-500 to-indigo-700'),
('jobs', 'Jobs & Work', 'Briefcase', 'Local Shop, Billing, Sales & Driver Vacancies', 19, 'Hiring Now', 'from-violet-500 to-purple-700'),
('real-estate', 'Real Estate', 'Building2', 'Plots, Independent Houses & Shops for Rent/Sale', 31, 'Hot Deals', 'from-orange-500 to-amber-700');

INSERT INTO businesses (name, category_slug, sub_category, rating, review_count, address, landmark, phone, whatsapp, timing, is_verified, is_featured, image, description, price_range, owner_name) VALUES
('Royal Family Restaurant & Biryani', 'food', 'Family Restaurant', 4.8, 245, 'Main Highway Road, Korutla', 'Opposite RTC Bus Depot', '+91 98480 11223', '+91 98480 11223', '11:00 AM - 11:00 PM', true, true, 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80', 'Famous for authentic Dum Biryani, Mandi, Chinese starters, and Tandoori dishes in Korutla.', '₹₹ (200-500)', 'Mohammed Ali'),
('Sai Laxmi General Stores & Kirana', 'groceries', 'Supermarket', 4.7, 180, 'Tower Clock Circle, Korutla', 'Near Government Hospital', '+91 94401 55667', '+91 94401 55667', '7:00 AM - 10:00 PM', true, true, 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=800&q=80', 'Top rated wholesale & retail Kirana store. Sona Masoori Rice, Freedom Oils, Dal, and daily home items.', '₹ (100-300)', 'Venkateshwarlu');

INSERT INTO hospitals (name, tagline, address, landmark, emergency_phone, appointment_phone, timing, image, is24x7, departments) VALUES
('Sri Laxmi Multi-Specialty Hospital', '24x7 Emergency & Trauma Care Center', 'Hospital Road, Korutla', 'Near Old Bus Stand', '+91 87252 22100', '+91 98490 33445', '24 Hours Open', 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80', true, 'General Medicine, Cardiology, Orthopedics, Pediatrics, Gynaecology');

INSERT INTO doctors (name, qualification, specialization, experience_years, hospital_name, hospital_address, timings, consultation_fee, phone, whatsapp, image) VALUES
('Dr. K. Srinivas Rao', 'MBBS, MD (General Medicine)', 'Senior Physician & Diabetologist', 18, 'Sri Laxmi Multi-Specialty Hospital', 'Hospital Road, Korutla', '10:00 AM - 2:00 PM & 5:00 PM - 8:30 PM', '₹300', '+91 98490 33445', '+91 98490 33445', 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80');

INSERT INTO jobs (title, category, shop_name, location, salary, job_type, experience, phone, whatsapp, posted_date, description, is_verified) VALUES
('Billing Executive & Computer Operator', 'Retail', 'Super Mart Supermarket', 'Tower Clock, Korutla', '₹12,000 - ₹15,000 / month', 'Full-time', '1-2 Years', '+91 94401 55667', '+91 94401 55667', '2026-03-15', 'Urgent requirement for Computer Billing Staff in Korutla supermarket.', true);

INSERT INTO real_estate (title, purpose_type, category, price, area_sqft, location, owner_name, owner_phone, whatsapp, posted_date, is_verified, image) VALUES
('Prime Commercial Plot Facing Highway', 'Sale', 'Plot', '₹45,00,000', 2400, 'Metpally Highway Road, Korutla', 'Ramesh Goud', '+91 99887 11223', '+91 99887 11223', '2026-03-10', true, 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80');
