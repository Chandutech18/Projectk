import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { phone, otp, name } = body;

    if (!phone || !otp) {
      return NextResponse.json(
        { success: false, message: 'Phone number and OTP are required' },
        { status: 400 }
      );
    }

    if (otp !== '123456') {
      return NextResponse.json(
        { success: false, message: 'Invalid OTP entered. Please use 123456 for demo.' },
        { status: 400 }
      );
    }

    const mockUser = {
      id: 'usr_' + Date.now(),
      name: name || 'Korutla Resident',
      phone: phone,
      role: 'USER',
      rewardPoints: 150,
      createdAt: new Date().toISOString(),
    };

    const token = 'jwt_mock_token_' + Math.random().toString(36).substring(2);

    return NextResponse.json({
      success: true,
      message: 'OTP verified successfully',
      token,
      user: mockUser,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Authentication failed' },
      { status: 500 }
    );
  }
}
