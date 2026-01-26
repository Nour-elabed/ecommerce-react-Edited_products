import { useState, useEffect } from "react";
import { useCart } from "@/context/useCart";

const Cart = () => {
  const { quantity, setQuantity, subtotal, tax, total, Price } = useCart();

  const sizes = ["S", "M", "L", "XL", "2XL"];
  const [selected, setSelected] = useState(sizes[0]);
  const [count, setCount] = useState(quantity); // sync with cart context

  // Keep local count in sync with global quantity
  useEffect(() => {
    setQuantity(count);
  }, [count, setQuantity]);

  const handleDecrement = () => {
    setCount((prev) => Math.max(1, prev - 1));
  };

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col gap-6 p-4">
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-2">
          <img
            src="/assets/icons/star.svg"
            className="w-4 h-4"
            alt="Star rating icon"
          />
          <span className="text-gray-500 text-sm font-semibold underline">
            4.9 - 142 reviews
          </span>
        </div>

        <div className="flex flex-col items-end gap-1">
          <span className="text-md font-semibold">${Price}</span>
          <span className="text-sm text-gray-400 line-through">$199.99</span>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <span className="text-sm font-semibold">Size : {selected}</span>

        <div className="flex gap-3">
          {sizes.map((size) => (
            <button
              key={size}
              className={`
                w-12 h-8 border rounded-md text-gray-600 flex items-center justify-center
                transition-colors duration-150 cursor-pointer
                ${
                  selected === size
                    ? "bg-blue-400 text-white font-semibold border-blue-500"
                    : "border-gray-300 hover:border-gray-500"
                }
              `}
              onClick={() => setSelected(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Counter + Add to Cart */}
      <div className="flex items-center justify-between mt-4">
        {/* Quantity Counter */}
        <div className="bg-gray-100 flex items-center p-1 rounded-full w-24">
          <button
            onClick={handleDecrement}
            className="bg-white flex items-center justify-center rounded-full border w-7 h-7 text-lg font-semibold cursor-pointer"
          >
            -
          </button>

          <span className="flex-1 text-center font-semibold text-sm">
            {count}
          </span>

          <button
            onClick={handleIncrement}
            className="bg-white flex items-center justify-center rounded-full border w-7 h-7 text-lg font-semibold cursor-pointer"
          >
            +
          </button>
        </div>

        <button className="
            flex items-end gap-2 rounded-full px-6 py-3
            bg-black text-white font-semibold shadow-md cursor-pointer
            hover:bg-black/80 hover:shadow-lg hover:scale-105
            transition-all duration-200
        ">
          <img
            src="/assets/icons/path.svg"
            alt="cart"
            className="w-5 h-5 "
          />
          Add to cart
        </button>
      </div>

      {/* Summary */}
      <div className="mt-4 text-sm">
        <p>Quantity: {quantity}</p>
        <p>Subtotal: ${subtotal.toFixed(2)}</p>
        <p>Tax: ${tax.toFixed(2)}</p>
        <p>Total: ${total.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;
