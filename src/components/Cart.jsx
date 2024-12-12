import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext'
import CartItem from './CartItem';

const Cart = () => {
   const {cart} = useCartContext();
   const {clearCart} = useCartContext();
   
   if(cart.length === 0) {
      return <div className='mt-20 text-center mb-20 relative'>
         <h3 className='text-4xl'>No Items In Cart</h3>
      </div>
   }
   return (
    <>
       <div className='w-full h-full mb-10 mt-10'>
          <div className='grid lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-3  ml-32 mr-32 '>
            <p>Item</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
            <p>Remove</p>
          </div>
          <hr className='ml-28 mr-40 mt-3'/>

          <div>
             {
                cart.map((curElem) => {
                    return <CartItem key={curElem.id} { ...curElem}/>;
                })
             }
          </div>
          <hr className='ml-24 mr-36 mt-5'/>

         <div className='mt-3 flex items-center justify-between'>
            <Link to="/products">
               <button className='border bg-blue-500 px-6 py-4 ml-24 text-white hover:underline uppercase rounded-md'>
                  Continue Shopping
               </button>
            </Link>
            <button onClick={clearCart} className='border bg-red-500 px-4 py-3 text-white hover:underline uppercase mr-40 rounded-md'>
               Clear Cart
            </button>
         </div>

       </div>
    </>
  )
}

export default Cart
