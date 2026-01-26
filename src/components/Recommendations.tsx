
import React from "react";
import ScrollCarousel from "./ui/ScrollCarousel"; 
import ProductSlideCard from "./shared/ProductSlideCard";
import { productSlides } from "./constants/ProductData";

const Recommendations: React.FC = () => {
  return (
    <section className="w-full py-8 px-4 md:mt-2 md:px-8">
    
      <h2 className="flex flex-col items-start md:hidden text-2xl font-bold text-gray-900 px-2 ml-6 mb-8">
        <span>Recommendations.</span>
      </h2>
      <div className="hidden md:flex flex-col items-center mb-12 md:mr-[65vh] lg:mr-[55vh]">
        <h2 className="text-3xl font-bold text-gray-900">
          <span>Recommendations. </span>
          <span className="text-gray-400">Best matching products for you</span>
        </h2>
      </div>
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