// sections/Recommendations.tsx
import React from "react";
import ScrollCarousel from "./ui/ScrollCarousel"; // Your existing untouched carousel
import ProductSlideCard from "./shared/ProductSlideCard";
import { productSlides } from "./constants/ProductData";

const Recommendations: React.FC = () => {
  return (
    <section className="w-full py-16 px-4 md:mt-2 md:px-8">
      {/* Mobile heading */}
      <h2 className="flex flex-col items-start md:hidden text-2xl font-bold text-gray-900 px-2 ml-6 mb-8">
        <span>Best Sellers.</span>
      </h2>

      {/* Desktop heading */}
      <div className="hidden md:flex flex-col items-center mb-12 md:mr-[65vh] lg:mr-[82vh]">
        <h2 className="text-3xl font-bold text-gray-900">
          <span>Best Sellers. </span>
          <span className="text-gray-400">Best selling of the month</span>
        </h2>
      </div>

      {/* Carousel */}
      <div className="max-w-7xl mx-auto">
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