"use client"

import { paginationProducts } from "./constants/PaginationProducts"

interface ProductProps {
  id: number
  image: string
  cartIcon: string
  description: string
  price: string
  bottomText: string
  bottomImage: string
  starIcon: string
  rating: string
}

const ShopContent: React.FC = () => {
  return (
    <section className="w-full flex justify-center">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2  lg:grid-cols-3 justify-items-center w-full max-w-[1200px] px-2">
        {paginationProducts.map((product: ProductProps) => (
          <div
            key={product.id}
            className="product-card rounded-lg overflow-hidden hover:shadow-sm transition-shadow duration-300 w-full max-w-[380px] md:max-w-[300px]"
          >
            <div className="relative">
              <img src={product.image} className="w-full h-48 object-cover" />
              <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow">
                <img src={product.cartIcon} className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 space-y-2">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-gray-800 text-sm">{product.description}</h3>
                <span className="text-primary font-bold">{product.price}</span>
              </div>

              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{product.bottomText}</span>
                <img src={product.bottomImage} className="w-12 h-4" />
              </div>

              <div className="flex items-center gap-1">
                <img src={product.starIcon} className="w-4 h-4" />
                <span className="text-sm">{product.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ShopContent