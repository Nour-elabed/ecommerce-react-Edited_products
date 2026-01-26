import {  useContext } from "react";
import type { CartContextType } from "./CartContext";
import CartContext from "./CartContext";

export const useCart = (): CartContextType => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}