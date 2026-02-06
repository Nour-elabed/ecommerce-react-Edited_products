import Footer from "./Footer";
import Recommendations from "./Recommendations";
import { KeywordSection } from "./ui/Keywords";

const ProductDetails = () => {
  return (
    <div className="flex flex-col gap-2 p-4 w-full max-w-full overflow-visible">
      
      <div className="py-2 mt-4 px-2 w-full">
        <span className="text-xl font-bold block py-2">
          Black Automatic Watch
        </span>
        <span className="text-l block">
          The St. Louis Meramec Canoe Company was founded by Alfred Wickett in 1922.
                  <span className="text-l block">
          Wickett had previously worked for the Old Town Canoe Co from 1900 to 1914.</span>
                  <span className="text-l block">

          Manufacturing of the classic wooden canoes in Valley Park, Missouri ceased
          in 1978.</span>
        </span>
      </div>

      <div className="py-2 mt-4 px-2 w-full">
        <span className="text-xl font-bold block py-4">
          Fabric + Care
        </span>
        <span className="text-l block">
          Material: Soft wool blend
        </span>
        <span className="text-l block py-2">
          Color: Various
        </span>
      </div>

      <div className="py-2 mt-4 px-2 w-full">
        <span className="text-xl font-bold block py-4">
          Sale performance
        </span>
        <span className="text-l block">
          Sales: 0
        </span>
        <span className="text-l block py-2">
          Review Count: -
        </span>
        <span className="text-l block py-2">
          Review Average: -
        </span>
      </div>

      <div className="py-2 mt-4 px-2 w-full">
        <span className="text-xl font-bold block py-4">
          Keywords
        </span>

        <div className="w-full overflow-visible">
          <KeywordSection />
        </div>

        <div className="w-full overflow-visible">
          <Recommendations />
        </div>
        <div>
            <Footer/>
        </div>
      </div>

    </div>
  );
};

export default ProductDetails;
