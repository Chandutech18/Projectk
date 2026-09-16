/**
 * Royal Korutla - Centralized API Client
 * Connects Next.js frontend to Java Spring Boot backend at http://localhost:8080
 */

const BACKEND_URL = process.env.BACKEND_API_URL || 'http://localhost:8080';
const PUBLIC_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8080';

// ─── Generic Fetcher ────────────────────────────────────────────────
async function apiFetch<T = unknown>(
  endpoint: string,
  options: RequestInit = {},
  usePublicUrl = false
): Promise<T> {
  const base = usePublicUrl ? PUBLIC_BACKEND_URL : BACKEND_URL;
  const url = `${base}${endpoint}`;

  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    ...options,
    next: { revalidate: 0 },
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(`API Error [${res.status}] ${endpoint}: ${error}`);
  }

  return res.json() as Promise<T>;
}

// ─── Types ───────────────────────────────────────────────────────────
interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
  count?: number;
}

// ─── Auth API ────────────────────────────────────────────────────────
export const authApi = {
  sendOtp: (phone: string) =>
    apiFetch<ApiResponse<{ phone: string; devOtp: string }>>('/auth/send-otp', {
      method: 'POST',
      body: JSON.stringify({ phone }),
    }),

  verifyOtp: (phone: string, otp: string, name?: string) =>
    apiFetch<ApiResponse<{ token: string; user: object }>>('/auth/verify-otp', {
      method: 'POST',
      body: JSON.stringify({ phone, otp, name }),
    }),

  logout: () =>
    apiFetch<ApiResponse<null>>('/auth/logout', { method: 'POST' }),

  getMe: (token: string) =>
    apiFetch<ApiResponse<object>>('/auth/me', {
      headers: { Authorization: `Bearer ${token}` },
    }),
};

// ─── Businesses API ──────────────────────────────────────────────────
export const businessesApi = {
  getAll: (params?: { category?: string; q?: string }) => {
    const qs = new URLSearchParams(params as Record<string, string>).toString();
    return apiFetch<ApiResponse<unknown[]>>(`/businesses${qs ? `?${qs}` : ''}`);
  },
  create: (data: object) =>
    apiFetch<ApiResponse<unknown>>('/businesses', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
};

// ─── Categories API ──────────────────────────────────────────────────
export const categoriesApi = {
  getAll: () => apiFetch<ApiResponse<unknown[]>>('/categories'),
};

// ─── Services API ────────────────────────────────────────────────────
export const servicesApi = {
  getAll: (params?: { category?: string; q?: string }) => {
    const qs = new URLSearchParams(params as Record<string, string>).toString();
    return apiFetch<ApiResponse<unknown[]>>(`/services${qs ? `?${qs}` : ''}`);
  },
};

// ─── Food API ────────────────────────────────────────────────────────
export const foodApi = {
  getRestaurants: (params?: { q?: string; vegOnly?: string }) => {
    const qs = new URLSearchParams(params as Record<string, string>).toString();
    return apiFetch<ApiResponse<unknown[]>>(`/food/restaurants${qs ? `?${qs}` : ''}`);
  },
  getMenu: (restaurantId?: string) => {
    const qs = restaurantId ? `?restaurantId=${restaurantId}` : '';
    return apiFetch<ApiResponse<unknown[]>>(`/food/menu${qs}`);
  },
  placeOrder: (orderData: object) =>
    apiFetch<ApiResponse<unknown>>('/food/orders', {
      method: 'POST',
      body: JSON.stringify(orderData),
    }),
  getOrders: () => apiFetch<ApiResponse<unknown[]>>('/food/orders'),
};

// ─── Grocery API ─────────────────────────────────────────────────────
export const groceryApi = {
  getStores: () => apiFetch<ApiResponse<unknown[]>>('/grocery/stores'),
  getProducts: (params?: { category?: string; q?: string }) => {
    const qs = new URLSearchParams(params as Record<string, string>).toString();
    return apiFetch<ApiResponse<unknown[]>>(`/grocery/products${qs ? `?${qs}` : ''}`);
  },
  placeOrder: (orderData: object) =>
    apiFetch<ApiResponse<unknown>>('/grocery/orders', {
      method: 'POST',
      body: JSON.stringify(orderData),
    }),
};

// ─── Hospitals API ────────────────────────────────────────────────────
export const hospitalsApi = {
  getAll: (params?: { emergency?: string; q?: string }) => {
    const qs = new URLSearchParams(params as Record<string, string>).toString();
    return apiFetch<ApiResponse<unknown[]>>(`/hospitals${qs ? `?${qs}` : ''}`);
  },
};

// ─── Doctors API ─────────────────────────────────────────────────────
export const doctorsApi = {
  getAll: (params?: { specialty?: string; q?: string }) => {
    const qs = new URLSearchParams(params as Record<string, string>).toString();
    return apiFetch<ApiResponse<unknown[]>>(`/doctors${qs ? `?${qs}` : ''}`);
  },
};

// ─── Jobs API ─────────────────────────────────────────────────────────
export const jobsApi = {
  getAll: (params?: { type?: string; q?: string }) => {
    const qs = new URLSearchParams(params as Record<string, string>).toString();
    return apiFetch<ApiResponse<unknown[]>>(`/jobs${qs ? `?${qs}` : ''}`);
  },
  create: (data: object) =>
    apiFetch<ApiResponse<unknown>>('/jobs', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
};

// ─── Real Estate API ─────────────────────────────────────────────────
export const realEstateApi = {
  getAll: (params?: { type?: string; category?: string; q?: string }) => {
    const qs = new URLSearchParams(params as Record<string, string>).toString();
    return apiFetch<ApiResponse<unknown[]>>(`/real-estate${qs ? `?${qs}` : ''}`);
  },
  create: (data: object) =>
    apiFetch<ApiResponse<unknown>>('/real-estate', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
};

// ─── Promotions API ──────────────────────────────────────────────────
export const promotionsApi = {
  getAll: () => apiFetch<ApiResponse<unknown[]>>('/promotions'),
};

// ─── Featured API ────────────────────────────────────────────────────
export const featuredApi = {
  getAll: () => apiFetch<ApiResponse<unknown[]>>('/businesses?featured=true'),
};

// ─── Offers API ──────────────────────────────────────────────────────
export const offersApi = {
  getAll: () => apiFetch<ApiResponse<unknown[]>>('/offers'),
};

// ─── Reviews API ─────────────────────────────────────────────────────
export const reviewsApi = {
  getAll: (businessId?: string) => {
    const qs = businessId ? `?businessId=${businessId}` : '';
    return apiFetch<ApiResponse<unknown[]>>(`/reviews${qs}`);
  },
  create: (data: object) =>
    apiFetch<ApiResponse<unknown>>('/reviews', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
};

// ─── Favourites API ──────────────────────────────────────────────────
export const favouritesApi = {
  getAll: () => apiFetch<ApiResponse<string[]>>('/favourites'),
  add: (listingId: string) =>
    apiFetch<ApiResponse<string[]>>('/favourites', {
      method: 'POST',
      body: JSON.stringify({ listingId }),
    }),
  remove: (listingId: string) =>
    apiFetch<ApiResponse<string[]>>(`/favourites?listingId=${listingId}`, {
      method: 'DELETE',
    }),
};

// ─── Rewards API ─────────────────────────────────────────────────────
export const rewardsApi = {
  getPoints: () => apiFetch<ApiResponse<{ totalPoints: number; tier: string }>>('/rewards/points'),
  getVouchers: () => apiFetch<ApiResponse<unknown[]>>('/rewards/vouchers'),
  redeemVoucher: (voucherId: string) =>
    apiFetch<ApiResponse<{ couponCode: string }>>('/rewards/vouchers', {
      method: 'POST',
      body: JSON.stringify({ voucherId }),
    }),
};

// ─── Subscriptions API ───────────────────────────────────────────────
export const subscriptionsApi = {
  getPlans: () => apiFetch<ApiResponse<unknown[]>>('/subscriptions'),
  subscribe: (planId: string, businessId: string) =>
    apiFetch<ApiResponse<unknown>>('/subscriptions', {
      method: 'POST',
      body: JSON.stringify({ planId, businessId }),
    }),
};

// ─── Payments API ────────────────────────────────────────────────────
export const paymentsApi = {
  createOrder: (amount: number, description?: string, customerPhone?: string) =>
    apiFetch<ApiResponse<{ orderId: string; amount: number; currency: string; keyId: string }>>('/payments/create', {
      method: 'POST',
      body: JSON.stringify({ amount, description, customerPhone }),
    }),
};

// Default export — all APIs collected
const apiClient = {
  auth: authApi,
  businesses: businessesApi,
  categories: categoriesApi,
  services: servicesApi,
  food: foodApi,
  grocery: groceryApi,
  hospitals: hospitalsApi,
  doctors: doctorsApi,
  jobs: jobsApi,
  realEstate: realEstateApi,
  promotions: promotionsApi,
  featured: featuredApi,
  offers: offersApi,
  reviews: reviewsApi,
  favourites: favouritesApi,
  rewards: rewardsApi,
  subscriptions: subscriptionsApi,
  payments: paymentsApi,
};

export default apiClient;
