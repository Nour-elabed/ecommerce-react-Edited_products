import { Button } from "./ui/button"
import { Link } from "react-router-dom"

const Banner = () => {
  return (
   
   <section className="hidden  sm:flex  w-full justify-center px-auto">
      <div className="w-[1200px] h-[680px] flex justify-center pt-16 relative">
    
        <img
          src="/assets/images/bg-image.svg"
          alt="Banner"
          className="w-full h-full object-cover object-center rounded-3xl"
        />

        
        <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-16 text-black">
          
          <span className="text-base md:text-lg font-medium text-black opacity-60 mb-4">
            100% original products
          </span>
          
        
          <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold mb-6 leading-tight">
            The All New Fashion<br/>
              Collection Items
          </h1>
          <span className="text-base md:text-lg font-medium text-black opacity-60 mb-4">
            Starting from: $59.99
          </span>
          
          
        
          <div>
            <Button
              asChild
              className="bg-black text-white font-medium rounded-full 
                         flex items-center gap-2 px-8 py-6 text-base
                         transform transition-all duration-200 
                         hover:scale-105 cursor-pointer border-0
                         hover:bg-gray-800"
            >
              <Link to="/shop">
                <span>Shop Now</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
      </section>
    
  )
}

export default Banner