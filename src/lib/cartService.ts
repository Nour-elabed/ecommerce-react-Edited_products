/**
 * Cart Service — the single source of truth for all cart API calls.
 * Components and contexts talk to THIS file only, never directly to axios.
 * If we ever change the API URL or auth strategy, we only edit this file.
 */
import axios from "axios";

// Helper: build the auth header from the token stored in localStorage.
// Returns an empty object if no token is present (guest users will simply
// get a 401 and the context will fall back to localStorage state).
const authHeader = () => {
    const token = localStorage.getItem("token");
    return token ? { Authorization: `Bearer ${token}` } : {};
};

// ─── Types ────────────────────────────────────────────────────────────────────

export type CartItemPayload = {
    productId: string;
    name: string;
    price: number;
    image?: string;
    quantity?: number;
};

// ─── API calls ────────────────────────────────────────────────────────────────

/** Fetch the logged-in user's full cart. */
export const getCart = () =>
    axios.get("/api/cart", { headers: authHeader() });

/** Add a new item or increment its quantity if it already exists. */
export const addItem = (payload: CartItemPayload) =>
    axios.post("/api/cart", payload, { headers: authHeader() });

/** Set the exact quantity for one cart item. */
export const updateItem = (productId: string, quantity: number) =>
    axios.put(`/api/cart/${productId}`, { quantity }, { headers: authHeader() });

/** Remove a single item from the cart by productId. */
export const removeItem = (productId: string) =>
    axios.delete(`/api/cart/${productId}`, { headers: authHeader() });

/** Wipe all items from the cart (keeps the cart document). */
export const clearCart = () =>
    axios.delete("/api/cart", { headers: authHeader() });
