import { NextResponse } from 'next/server';
import { FEATURED_BUSINESSES } from '@/data/mockData';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');

  let stores = FEATURED_BUSINESSES.filter(
    (b) => b.categorySlug === 'groceries' || b.subCategory.toLowerCase().includes('supermarket') || b.subCategory.toLowerCase().includes('kirana')
  );

  if (query) {
    const q = query.toLowerCase();
    stores = stores.filter(
      (s) => s.name.toLowerCase().includes(q) || s.address.toLowerCase().includes(q)
    );
  }

  return NextResponse.json({
    success: true,
    data: stores,
    count: stores.length,
    message: 'Grocery stores retrieved successfully',
  });
}
