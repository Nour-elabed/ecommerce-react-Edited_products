import '../index.css'
import './ui/Embla.css'
import { EmblaCarousel } from "./ui/EmblaCarousel"
import { Button } from "@/components/ui/button"
import { LucideSearch } from "lucide-react"
import { Link } from 'react-router-dom'

const Hero = () => {
  const slides: string[] = [
    "/assets/images/hero-bg.svg",
    "/assets/images/V_Magazine_139_Cover_Shoot_02_Gigi_Hadid_Look_03_1848-2-2_Digital-copy.jpg",
    "/assets/images/bella-hadid-6p2iop9d6y9c0i78.jpg"
  ]

  return (
    <section className="w-full h-[700px] pt-16 relative">
      <EmblaCarousel>
        {slides.map((img: string, index: number) => (
          <div className="embla__slide" key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="embla__slide__img"
            />
            
            <div className="absolute inset-0 flex flex-col justify-center items-start px-4 sm:px-6 md:px-8 ml-0 sm:ml-0 md:ml-12 text-black">
              <span className="text-lg sm:text-base md:text-lg mb-2 font-medium text-black opacity-60">
                Starting from: $49.99
              </span>
              
              <h1 className="text-2xl sm:text-4xl md:text-4xl lg:text-6xl font-bold mb-6 md:mb-12 leading-tight">
                Exclusive collection<br />
                for everyone
              </h1>
              
              <div>
                <Button
                  asChild
                  variant="outline"
                  className="bg-black text-gray-100 font-medium shadow-lg rounded-full 
                             flex items-center gap-2 px-6 py-3
                             transform transition-all duration-200 
                             hover:scale-105 cursor-pointer"
                >
                  <Link to="/shop">
                    <span>Explore Now</span>
                    <LucideSearch className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </EmblaCarousel>
      <div>
        <img
        src='/assets/images/brand-info.svg'
        alt='brand-img'
        className='cursor-pointer w-full hidden md:block '
        />
        <div>
          <div className=' md:hidden'>
            <div className='flex items-center gap-2  ml-4 mt-8 font-bold'>
              <span>Nexton</span>
              <img
               src='/assets/icons/logo.svg'
               alt='logo'
               className='w-4 h-4  '/>
             <span>always with you</span>
           </div>
            <div className='grid grid-cols-2 gap-1 mt-4 px-4 '>
              <img src='/assets/icons/brand-info-1.svg'
              alt='info-1'
              />
              <img src='/assets/icons/brand-info-2.svg'
              alt='info-2'
               />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Hero