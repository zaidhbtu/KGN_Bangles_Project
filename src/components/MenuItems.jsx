import React from 'react';
import { Link } from 'react-router-dom';

const MenuItems = ({ items }) => {
  return (
    <div className='p-5'>
      <div className='max-w-[1240px] mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 mb-5'>
          {items.map((item) => {
            const { id, name, image, description, price, category } = item;
            return (
              <Link to={`/details/${id}`} key={id}>
                <div className='w-full'>
                  <img
                    className='object-contain w-full h-56 rounded-lg bg-none border mb-4'
                    src={image}
                    alt={name}
                  />
                  <div className='w-full'>
                    <h1 className='font-bold text-2xl mb-1 mt-1'>{name}</h1>
                    <h3 className='font-semibold text-xl'>Price: {price}</h3>
                    <p className='text-gray-600 font-sans'>{description}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MenuItems;
