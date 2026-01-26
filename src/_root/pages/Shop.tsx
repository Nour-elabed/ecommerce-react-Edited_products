import Sidebar from "@/components/Sidebar"
import ShopContent from "@/components/ShopContent"
import { PaginationDemo } from "@/components/ui/PaginationDemo"
import Footer from "@/components/Footer"

const Shop = () => {
  return (
    <>
      {/* MAIN PAGE LAYOUT */}
      <div className="flex flex-col md:flex-row gap-12 px-4 md:px-8 py-8">
        
        {/* SIDEBAR DESKTOP */}
        <div className="hidden md:block w-80">
          <div className="h-full bg-white p-6 rounded-lg">
            <Sidebar />
          </div>
        </div>


        <div className="block md:hidden">
          <Sidebar />
        </div>

        <div className="flex-1 flex flex-col">
          <div className="h-full bg-white md:mt-4 md:p-12 rounded-lg">
            <ShopContent />
          </div>

          <div className="flex justify-center md:justify-end mt-6 px-4">
            <PaginationDemo />
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Shop
