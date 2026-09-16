import { NextResponse } from 'next/server';
import { FEATURED_BUSINESSES } from '@/data/mockData';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');

  let shoppingStores = FEATURED_BUSINESSES.filter(
    (b) => b.categorySlug === 'shopping' || b.subCategory.toLowerCase().includes('textiles') || b.subCategory.toLowerCase().includes('jewelers') || b.subCategory.toLowerCase().includes('footwear')
  );

  if (query) {
    const q = query.toLowerCase();
    shoppingStores = shoppingStores.filter(
      (s) => s.name.toLowerCase().includes(q) || s.subCategory.toLowerCase().includes(q)
    );
  }

  return NextResponse.json({
    success: true,
    data: shoppingStores,
    count: shoppingStores.length,
    message: 'Shopping & retail stores retrieved successfully',
  });
}
