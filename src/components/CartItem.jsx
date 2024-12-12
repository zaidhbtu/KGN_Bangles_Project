import React from 'react'
import CartAmountToggle from './CartAmountToggle';
import { FaTrash } from 'react-icons/fa';
import { useCartContext } from '../context/CartContext';


const CartItem = ({id, name, image, col, price, amount}) => {

  const {removeItem} = useCartContext();
  const setDecrease = () => {
    //amount > 1 ? setAmount(amount -1): setAmount(1);
  };

  const setIncrease = () => {
    //amount < stock ? setAmount(amount +1) : setAmount(stock);
  };
 
  
  return (
    <div className='grid lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-3 ml-24 mr-32 mt-5'>

       {/* Item Section */}
       <div className='flex gap-3'>
         <img src={image} alt={id} className='w-12 h-10 object-contain'/>
         <div className='text-md'>
           <p>{name}</p>
           <div className='flex items-center'>
            <p>Color : </p>
            <div style={{backgroundColor: col, color:col}} 
             className="w-3 h-3 rounded-full hover:opacity-100 opacity-70 ml-2"></div>
            </div>
         </div>
       </div>
       
       {/* Price Section */}
       <div className='items-center ml-5 text-md mt-2'>
        <p>{price}</p>
       </div>

       {/* Quantity */}
       <div>
        <CartAmountToggle
         amount ={amount}
         setDecrease = {setDecrease}
         setIncrease = {setIncrease}
        />
       </div>

       {/* Subtotal */}
       <div className='items-center ml-5 text-md mt-2'>
          <p>{ price * amount }</p>
       </div>

       {/* Remove */}
       <div className='items-center ml-5 text-md mt-2 cursor-pointer'>
          <FaTrash className='text-red-500'  onClick={() => removeItem(id)}/>
       </div>
    </div>
  )
}

export default CartItem
