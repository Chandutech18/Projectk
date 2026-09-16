import { NextResponse } from 'next/server';

const mockFoodOrders: Array<{
  id: string;
  restaurantId: string;
  items: Array<{ id: string; name: string; price: number; quantity: number }>;
  totalAmount: number;
  deliveryAddress: string;
  status: string;
  createdAt: string;
}> = [];

export async function GET() {
  return NextResponse.json({
    success: true,
    data: mockFoodOrders,
    count: mockFoodOrders.length,
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { restaurantId, items, totalAmount, deliveryAddress } = body;

    if (!items || !items.length || !totalAmount) {
      return NextResponse.json(
        { success: false, message: 'Invalid food order request' },
        { status: 400 }
      );
    }

    const newOrder = {
      id: 'fod_' + Date.now(),
      restaurantId: restaurantId || 'b1',
      items,
      totalAmount,
      deliveryAddress: deliveryAddress || 'Korutla Town',
      status: 'PLACED',
      createdAt: new Date().toISOString(),
    };

    mockFoodOrders.unshift(newOrder);

    return NextResponse.json({
      success: true,
      message: 'Food order placed successfully!',
      order: newOrder,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to place food order' },
      { status: 500 }
    );
  }
}
