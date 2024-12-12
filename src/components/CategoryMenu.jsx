import React from 'react';

const CartMenu = ({ filterMenu, categoryItems }) => {
  return (
    <>
      {/* Category Buttons Container */}
      <div className="flex flex-wrap items-center justify-center gap-4 mt-4 mx-2">
        {categoryItems.map((curElem, index) => (
          <button
            key={index}
            className="px-6 py-3 text-sm md:text-base border rounded-lg bg-[#ff7489] text-white font-semibold hover:bg-[#f87082] hover:underline transition"
            onClick={() => filterMenu(curElem)}
          >
            {curElem}
          </button>
        ))}
      </div>
    </>
  );
};

export default CartMenu;
