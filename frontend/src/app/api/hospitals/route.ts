import { NextResponse } from 'next/server';
import apiClient from '@/lib/apiClient';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const emergency = searchParams.get('emergency') || undefined;
    const q = searchParams.get('q') || undefined;

    const result = await apiClient.hospitals.getAll({ emergency, q });
    return NextResponse.json(result);
  } catch (error) {
    console.error('[/api/hospitals] Backend error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch hospitals from backend' },
      { status: 500 }
    );
  }
}
