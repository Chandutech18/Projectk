import { NextResponse } from 'next/server';
import apiClient from '@/lib/apiClient';

export async function GET() {
  try {
    const result = await apiClient.categories.getAll();
    return NextResponse.json(result);
  } catch (error) {
    console.error('[/api/categories] Backend error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch categories from backend' },
      { status: 500 }
    );
  }
}
