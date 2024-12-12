import React, { useState } from 'react' 
import Menu from '../Data/Menu'
import MenuItems from './MenuItems';
import CartMenu from './CategoryMenu';

//Get Unique category name from Menu Category
const allCategoryValues = [...new Set(Menu.map((curElem) => curElem.category)), "All"];

const Products = () => {
  const [items, setItems] = useState(Menu);
  const [categoryItems, setCategoryItems] = useState(allCategoryValues);

  const filterMenu = (category) => {
    if (category === "All") {
      setItems(Menu);
      return;
    }

    const updateItems = Menu.filter((curElem) => {
      return curElem.category === category;
    });

    setItems(updateItems);
  }

  return (
    <>
      <h1 className="text-center mt-6 text-3xl text-gray-700 mb-6 sm:text-4xl md:text-5xl lg:text-6xl font-semibold">
        Order Your Favourite Bangles
      </h1>
      <hr className="border-t-2 border-gray-300 mb-6"/>

      {/* Category Filter Menu */}
      <div className="sm:px-4 md:px-8">
        <CartMenu filterMenu={filterMenu} categoryItems={categoryItems} />
      </div>

      {/* Menu Items List */}
      <div className="px-4 sm:px-6 md:px-8">
        <MenuItems items={items} />
      </div>
    </>
  );
}

export default Products;
