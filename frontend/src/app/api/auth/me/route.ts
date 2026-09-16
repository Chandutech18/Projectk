import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const authHeader = request.headers.get('authorization');

  if (!authHeader) {
    return NextResponse.json(
      { success: false, message: 'Unauthorized' },
      { status: 401 }
    );
  }

  const mockUser = {
    id: 'usr_demo_123',
    name: 'Royal Korutla User',
    phone: '9876543210',
    role: 'USER',
    rewardPoints: 250,
    savedListings: ['b1', 'f1', 'h1'],
  };

  return NextResponse.json({
    success: true,
    user: mockUser,
  });
}
