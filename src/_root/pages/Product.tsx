
import ProductContent from "@/components/ProductContent"
import ProductDetails from "@/components/ProductDetails"
import { CartProvider } from "@/context/CartContext"
const Product = () => {
  return (
    <div>
         <CartProvider>

      <ProductContent/>
      <ProductDetails/>
      </CartProvider>
    </div>
  )
}

export default Product
