import { KeywordSection } from "./ui/Keywords"
const ProductDetails = () => {
  return (
    <div className="flex justify-start  items-start flex-col gap-6 p-4">
        <div className="py-2 mt-14 px-2">
            <span className="text-xl font-bold block py-2 ">Black Automatic Watch</span>
            <span className="text-l ">The St. Louis Meramec Canoe Company was founded by Alfred Wickett in 1922. Wickett had
                    previously worked for the Old Town Canoe Co from 1900 to 1914. Manufacturing of the classic
                    wooden canoes in Valley Park, Missouri ceased in 1978. </span>
        </div>
        <div className="py-2 mt-14 px-2">
            <span className="text-xl font-bold block py-4 ">Fabric + Care</span>
            <span className="text-l block ">Material: Soft wool blend </span>
            <span className="text-l block py-2">Color: Various </span>
        </div>
        <div className="py-2 mt-14 px-2">
            <span className="text-xl font-bold block py-4 ">Sale performance</span>
            <span className="text-l block ">Sales: 0 </span>
            <span className="text-l block py-2">Review Count: - </span>
             <span className="text-l block py-2">Review Average: - </span>
        </div>
         <div className="py-2 mt-14 px-2">
            <span className="text-xl font-bold block py-4 ">Keywords</span>
            <div>
                <KeywordSection/>
            </div>
            
        
        </div>
    </div>
  )
}

export default ProductDetails
