import { NextResponse } from 'next/server';
import { FOOD_MENU_ITEMS } from '@/data/mockData';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const restaurantId = searchParams.get('restaurantId');
  const isVeg = searchParams.get('isVeg');

  let items = FOOD_MENU_ITEMS;

  if (restaurantId) {
    items = items.filter((item) => item.restaurantId === restaurantId);
  }

  if (isVeg === 'true') {
    items = items.filter((item) => item.isVeg);
  }

  return NextResponse.json({
    success: true,
    data: items,
    count: items.length,
    message: 'Food menu items retrieved successfully',
  });
}
