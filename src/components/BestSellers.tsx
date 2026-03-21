// sections/Recommendations.tsx
import React from "react";
import ScrollCarousel from "./ui/ScrollCarousel"; // Your existing untouched carousel
import ProductSlideCard from "./shared/ProductSlideCard";
import { productSlides } from "./constants/ProductData";

const BestSellers: React.FC = () => {
  return (
    <section className="w-full py-16 px-4 md:px-8 mt-4">
      <div className="max-w-7xl mx-auto w-full">
        {/* Mobile heading */}
        <h2 className="md:hidden flex flex-col items-start text-3xl font-extrabold text-gray-900 mb-8 pt-4">
          <span>Best Sellers.</span>
        </h2>

        {/* Desktop heading */}
        <div className="hidden md:flex flex-col items-start w-full mb-10">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            <span>Best Sellers. </span>
            <span className="text-gray-400 font-medium ml-2">Best selling of the month</span>
          </h2>
        </div>
        <ScrollCarousel
          slides={productSlides.map((product) => (
            <div key={product.id} className="scroll-carousel__slide">
              <ProductSlideCard {...product} />
            </div>
          ))}
          options={{ 
            loop: true, 
            align: "start",
            dragFree: true ,
            slidesToScroll: 1,
             containScroll: "trimSnaps"
          }}
        />
      </div>
    </section>
  );
};

export default BestSellers;