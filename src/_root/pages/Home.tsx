
import Collections from '@/components/Collections'
import Hero from '@/components/Hero'
import Recommendations from '@/components/Recommendations'
import BestSellers from '@/components/BestSellers'
import Banner from '@/components/Banner'
import Footer from '@/components/Footer'

const Home = () => {
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
