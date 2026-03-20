import '../index.css'
import './ui/Embla.css'
import { EmblaCarousel } from "./ui/EmblaCarousel"
import { Button } from "@/components/ui/button"
import { LucideSearch, Users, Package, Star } from "lucide-react"
import { Link } from 'react-router-dom'

const statCards = [
  { icon: Users, value: '10K+', label: 'Customers' },
  { icon: Package, value: '500+', label: 'Products' },
  { icon: Star, value: '4.9★', label: 'Rating' },
]

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
                  className="bg-black text-gray-100 font-medium shadow-lg rounded-full flex items-center gap-2 px-6 py-3 transform transition-all duration-200 hover:scale-105 cursor-pointer"
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

      {/* Stat cards — Desktop: flex row of 3 | Mobile: 2-column grid */}
      <div className="w-full">
        {/* Desktop */}
        <div className="hidden md:flex items-center justify-center gap-6 mt-4 px-8">
          {statCards.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-xl px-6 py-3 shadow-sm border border-gray-100">
              <Icon className="w-5 h-5 text-gray-700" />
              <div>
                <p className="text-lg font-bold text-gray-900 leading-none">{value}</p>
                <p className="text-xs text-gray-500 mt-0.5">{label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: 2-column grid showing first 2 stats */}
        <div className="md:hidden grid grid-cols-2 gap-3 mt-4 px-4">
          {statCards.slice(0, 2).map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-xl px-4 py-3 shadow-sm border border-gray-100">
              <Icon className="w-4 h-4 text-gray-700" />
              <div>
                <p className="text-base font-bold text-gray-900 leading-none">{value}</p>
                <p className="text-xs text-gray-500 mt-0.5">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Hero