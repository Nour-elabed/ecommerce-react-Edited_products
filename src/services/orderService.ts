import api from "./api";
import type { Order, ApiResponse, ShippingAddress, OrderItem } from "@/types";

export interface CreateOrderPayload {
    orderItems: OrderItem[];
    shippingAddress: ShippingAddress;
    paymentMethod: string;
    totalPrice: number;
}

export const createOrder = (payload: CreateOrderPayload) =>
    api.post<ApiResponse<Order>>("/orders", payload);

export const getUserOrders = () =>
    api.get<ApiResponse<Order[]>>("/orders/my");

export const getOrderById = (id: string) =>
    api.get<ApiResponse<Order>>(`/orders/${id}`);
