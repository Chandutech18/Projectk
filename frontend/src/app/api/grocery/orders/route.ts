import { NextResponse } from 'next/server';

const mockGroceryOrders: Array<{
  id: string;
  storeId: string;
  items: Array<{ id: string; name: string; price: number; quantity: number }>;
  totalAmount: number;
  deliverySlot: string;
  status: string;
  createdAt: string;
}> = [];

export async function GET() {
  return NextResponse.json({
    success: true,
    data: mockGroceryOrders,
    count: mockGroceryOrders.length,
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { storeId, items, totalAmount, deliverySlot } = body;

    if (!items || !items.length || !totalAmount) {
      return NextResponse.json(
        { success: false, message: 'Invalid grocery order request' },
        { status: 400 }
      );
    }

    const newOrder = {
      id: 'gro_' + Date.now(),
      storeId: storeId || 'b5',
      items,
      totalAmount,
      deliverySlot: deliverySlot || 'Express 30 mins',
      status: 'CONFIRMED',
      createdAt: new Date().toISOString(),
    };

    mockGroceryOrders.unshift(newOrder);

    return NextResponse.json({
      success: true,
      message: 'Grocery order placed successfully!',
      order: newOrder,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to place grocery order' },
      { status: 500 }
    );
  }
}
