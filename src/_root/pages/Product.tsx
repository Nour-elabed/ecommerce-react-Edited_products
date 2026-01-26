
import ProductContent from "@/components/ProductContent"
import { CartProvider } from "@/context/CartContext"
const Product = () => {
  return (
    <div>
         <CartProvider>

      <ProductContent/>
      </CartProvider>
    </div>
  )
}

export default Product
