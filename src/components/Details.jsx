import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import Menu from '../Data/Menu';
import Stars from './Stars';
import { TbTruckDelivery } from "react-icons/tb";
import { TbReplace } from "react-icons/tb";
import { MdHighQuality } from "react-icons/md";
import AddToCart from './AddToCart';

const DetailsPage = () => {
  const {id} = useParams();
  
  let menu = Menu.filter(menu => menu.id == id);
  menu = menu[0];
  
  return (
    <>
      <div className='text-xl sm:text-2xl font-semibold bg-gray-200 p-4'>
        <Link to="/" className='text-blue-400 hover:underline'>Home</Link>/{menu.name}
      </div>
      <div className='max-w-[1240px] mx-auto p-4'>
        <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6 mt-6'>
          <img className="object-contain w-full h-[250px] sm:h-[400px] md:h-[450px] rounded-lg border border-gray-300 shadow-lg" src={menu.image} alt="image" />
          <div className='flex flex-col ml-5'>
            <h1 className='text-3xl md:text-4xl font-bold mb-3'>{menu.name}</h1>
            <Stars stars={menu.stars} reviews={menu.reviews}/>
            <p> MRP : <del>120.00 Rs</del></p>
            <h3 className='text-xl font-semibold mt-2 text-violet-400'>Deal of the Day : {menu.price}</h3>
            <p className='text-gray-500 mt-1'>{menu.description}</p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
              <div className="text-center">
                <TbTruckDelivery className="text-3xl text-gray-700 mx-auto" />
                <p className="text-sm mt-1">Free Delivery</p>
              </div>
              <div className="text-center">
                <TbReplace className="text-3xl text-gray-700 mx-auto" />
                <p className="text-sm mt-1">30 Days Replacement</p>
              </div>
              <div className="text-center">
                <TbTruckDelivery className="text-3xl text-gray-700 mx-auto" />
                <p className="text-sm mt-1">KGN Delivered</p>
              </div>
              <div className="text-center">
                <MdHighQuality className="text-3xl text-gray-700 mx-auto" />
                <p className="text-sm mt-1">High Quality</p>
              </div>
            </div>


            <hr className='max-w-[100%] w-[90%] border border-black mt-4'/>
            {menu.stock >0 && <AddToCart product={menu}/>}
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailsPage

