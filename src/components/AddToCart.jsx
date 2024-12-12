import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
import CartAmountToggle from './CartAmountToggle';
import { useCartContext } from '../context/CartContext';

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();
  const { id, color, stock } = product;

  const [col, setColors] = useState(color[0]);
  const [amount, setAmount] = useState(1);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };

  return (
    <div className="flex flex-col items-start gap-4">
      {/* Colors Section */}
      <div>
        <p className="text-lg md:text-2xl font-medium">
          Colors:
          {color.map((curColor, index) => (
            <button
              key={index}
              style={{ backgroundColor: curColor }}
              className={`w-6 h-6 rounded-full ml-2 mt-4 flex items-center justify-center hover:opacity-100 opacity-70 border ${
                col === curColor ? "border-gray-900" : "border-transparent"
              }`}
              onClick={() => setColors(curColor)}
            >
              {col === curColor && (
                <FaCheck className="text-white text-sm font-bold" />
              )}
            </button>
          ))}
        </p>
      </div>

      {/* Cart Amount Toggle */}
      <CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />

      {/* Add to Cart Button */}
      <Link to="/cart" onClick={() => addToCart(id, col, amount, product)}>
        <button className="border px-4 py-2 rounded-lg bg-violet-500 text-white hover:bg-violet-600 transition-all font-semibold w-full sm:w-auto">
          ADD TO CART
        </button>
      </Link>
    </div>
  );
};

export default AddToCart;
