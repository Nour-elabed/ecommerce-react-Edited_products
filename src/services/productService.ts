import api from "./api";
import type { Product, ApiResponse } from "@/types";

export const getProducts = (category?: string) =>
    api.get<ApiResponse<Product[]>>("/products", {
        params: category ? { category } : {},
    });

export const getProductById = (id: string) =>
    api.get<ApiResponse<Product>>(`/products/${id}`);
