/**
 * Centralized cart service — all cart API calls go through here.
 * Uses the shared `api` Axios instance (auto-auth, interceptors).
 */
import api from "@/services/api";
import type { ApiResponse } from "@/types";

export type CartItemPayload = {
    productId: string;
    name: string;
    price: number;
    image?: string;
    quantity?: number;
};

export const getCart = () =>
    api.get<ApiResponse<{ items: CartItemPayload[] }>>("/cart");

export const addItem = (payload: CartItemPayload) =>
    api.post<ApiResponse<{ items: CartItemPayload[] }>>("/cart", payload);

export const updateItem = (productId: string, quantity: number) =>
    api.put<ApiResponse<{ items: CartItemPayload[] }>>(`/cart/${productId}`, { quantity });

export const removeItem = (productId: string) =>
    api.delete<ApiResponse<{ items: CartItemPayload[] }>>(`/cart/${productId}`);

export const clearCart = () =>
    api.delete<ApiResponse<object>>("/cart");
