import { NextResponse } from 'next/server';
import apiClient from '@/lib/apiClient';

export async function GET() {
  try {
    const result = await apiClient.jobs.getAll();
    return NextResponse.json(result);
  } catch (error) {
    console.error('[/api/jobs] Backend error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch jobs from backend' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = await apiClient.jobs.create(body);
    return NextResponse.json(result);
  } catch (error) {
    console.error('[/api/jobs POST] Backend error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to post job' },
      { status: 500 }
    );
  }
}
