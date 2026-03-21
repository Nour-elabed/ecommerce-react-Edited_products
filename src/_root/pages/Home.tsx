
import Collections from '@/components/Collections'
import Hero from '@/components/Hero'
import Recommendations from '@/components/Recommendations'
import BestSellers from '@/components/BestSellers'
import Banner from '@/components/Banner'
import Footer from '@/components/Footer'
import { useEffect } from 'react'
import { toast } from 'sonner'
import { useAuth } from '@/context/AuthContext'

const Home = () => {
  const { user } = useAuth()
  
  useEffect(() => {
    if (!user) {
      toast.info("Please login or register to get the full experience!")
    }
  }, [user])
  return (
    <div>
        
        <Hero/>
        <Collections/>
        <Recommendations/>
        <BestSellers/>
        <Banner/>
        <Footer/>
    </div>
  )
}

export default Home
