import {createContext , useState ,  useMemo, type ReactNode, } from 'react'

type  CartProviderProps = {
  children: ReactNode
}
export type CartContextType = {
  Price: number;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  subtotal: number;
  tax: number;
  total: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: CartProviderProps) => {
const Price =169.99;
const Tax_Rate =0;
const [quantity, setQuantity] = useState<number>(1);
const subtotal = useMemo(() => Price * quantity, [Price, quantity]);
const tax = useMemo(() => subtotal * Tax_Rate, [subtotal, Tax_Rate]);
const total = useMemo(() => subtotal + tax, [subtotal, tax]);
const value =useMemo(() => ({
  quantity,
  setQuantity,
  subtotal,
  tax,
  total,
    Price,
}), [quantity, setQuantity, subtotal, tax, total, Price]);
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
