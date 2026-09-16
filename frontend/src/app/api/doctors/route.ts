import { NextResponse } from 'next/server';
import apiClient from '@/lib/apiClient';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const specialty = searchParams.get('specialty') || undefined;
    const q = searchParams.get('q') || undefined;

    const result = await apiClient.doctors.getAll({ specialty, q });
    return NextResponse.json(result);
  } catch (error) {
    console.error('[/api/doctors] Backend error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch doctors from backend' },
      { status: 500 }
    );
  }
}
