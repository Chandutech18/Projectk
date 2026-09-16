import { NextResponse } from 'next/server';
import { SERVICE_PROVIDERS } from '@/data/mockData';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const query = searchParams.get('q');

  let results = SERVICE_PROVIDERS;

  if (category) {
    const cat = category.toLowerCase();
    results = results.filter((s) => s.serviceCategory.toLowerCase().includes(cat));
  }

  if (query) {
    const q = query.toLowerCase();
    results = results.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.serviceCategory.toLowerCase().includes(q) ||
        s.area.toLowerCase().includes(q)
    );
  }

  return NextResponse.json({
    success: true,
    data: results,
    count: results.length,
    message: 'Services retrieved successfully',
  });
}
