import { NextResponse } from 'next/server';
import apiClient from '@/lib/apiClient';
import { FEATURED_BUSINESSES } from '@/data/mockData';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category') || undefined;
    const q = searchParams.get('q') || undefined;

    // Try Java backend first (with 8 second timeout)
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);

    try {
      const result = await apiClient.businesses.getAll({ category, q });
      clearTimeout(timeout);
      return NextResponse.json(result);
    } catch (backendError) {
      clearTimeout(timeout);
      // Fallback to local mockData if backend is slow/unavailable
      console.warn('[/api/businesses] Backend unavailable, using local data:', backendError);

      let results = FEATURED_BUSINESSES;
      if (category && category !== 'all') {
        results = results.filter((b) => b.categorySlug === category);
      }
      if (q) {
        const query = q.toLowerCase();
        results = results.filter(
          (b) =>
            b.name.toLowerCase().includes(query) ||
            b.address.toLowerCase().includes(query) ||
            b.subCategory.toLowerCase().includes(query)
        );
      }
      return NextResponse.json({
        success: true,
        data: results,
        count: results.length,
        message: 'Businesses retrieved (local data)',
        source: 'local',
      });
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to fetch businesses' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = await apiClient.businesses.create(body);
    return NextResponse.json(result);
  } catch (error) {
    console.error('[/api/businesses POST] Backend error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to create business' },
      { status: 500 }
    );
  }
}
