import { NextResponse } from 'next/server';
import { FEATURED_BUSINESSES } from '@/data/mockData';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const vegOnly = searchParams.get('vegOnly');
  const query = searchParams.get('q');

  let restaurants = FEATURED_BUSINESSES.filter(
    (b) => b.categorySlug === 'food' || b.subCategory.toLowerCase().includes('restaurant') || b.subCategory.toLowerCase().includes('tiffins')
  );

  if (query) {
    const q = query.toLowerCase();
    restaurants = restaurants.filter(
      (r) => r.name.toLowerCase().includes(q) || r.tags.some((t) => t.toLowerCase().includes(q))
    );
  }

  if (vegOnly === 'true') {
    restaurants = restaurants.filter((r) => r.tags.some((t) => t.toLowerCase().includes('veg')));
  }

  return NextResponse.json({
    success: true,
    data: restaurants,
    count: restaurants.length,
    message: 'Food spots & restaurants retrieved successfully',
  });
}
