import { NextResponse } from 'next/server';

const mockGroceryProducts = [
  { id: 'gp1', name: 'Fresh Sona Masoori Rice (26kg)', price: 1350, category: 'Staples', unit: 'Bag', inStock: true, image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=400&q=80' },
  { id: 'gp2', name: 'Freedom Refined Sunflower Oil (1L)', price: 140, category: 'Oils & Ghee', unit: 'Pouch', inStock: true, image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=400&q=80' },
  { id: 'gp3', name: 'Toor Dal Premium Grade (1kg)', price: 160, category: 'Pulses', unit: 'Pack', inStock: true, image: 'https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?auto=format&fit=crop&w=400&q=80' },
  { id: 'gp4', name: 'Fresh Farm Eggs (Tray of 30)', price: 180, category: 'Dairy & Eggs', unit: 'Tray', inStock: true, image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=400&q=80' },
  { id: 'gp5', name: 'Aashirvaad Shuddh Chakki Atta (5kg)', price: 245, category: 'Atta & Flours', unit: 'Pack', inStock: true, image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80' },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const query = searchParams.get('q');

  let products = mockGroceryProducts;

  if (category) {
    products = products.filter((p) => p.category.toLowerCase() === category.toLowerCase());
  }

  if (query) {
    const q = query.toLowerCase();
    products = products.filter((p) => p.name.toLowerCase().includes(q));
  }

  return NextResponse.json({
    success: true,
    data: products,
    count: products.length,
    message: 'Grocery products retrieved successfully',
  });
}
