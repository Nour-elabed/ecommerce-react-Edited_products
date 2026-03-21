
import React from "react";
import ScrollCarousel from "./ui/ScrollCarousel"; 
import ProductSlideCard from "./shared/ProductSlideCard";
import { productSlides } from "./constants/ProductData";

const Recommendations: React.FC = () => {
  return (
    <section className="w-full py-12 px-4 md:px-8 bg-gray-50/50 mt-4">
      <div className="max-w-7xl mx-auto w-full">
        {/* Mobile Heading */}
        <h2 className="md:hidden flex flex-col items-start text-3xl font-extrabold text-gray-900 mb-8 pt-4">
          <span>Recommendations.</span>
        </h2>
        
        {/* Desktop Heading */}
        <div className="hidden md:flex flex-col items-start w-full mb-10">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            <span>Recommendations. </span>
            <span className="text-gray-400 font-medium ml-2">Best matching products for you</span>
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

export default Recommendations;