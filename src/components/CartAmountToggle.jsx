import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'

const CartAmountToggle = ({amount, setDecrease, setIncrease}) => {
  return (
    <>
       <div>
         <div className='flex items-center gap-5 mt-3 ml-4'>
            <button onClick={() => setDecrease()}>
                <FaMinus/>
            </button>
            <div className='items-center'>{amount}</div>
            <button onClick={() => setIncrease()}>
                <FaPlus/>
            </button>
         </div>
       </div>
    </>
  )
}

export default CartAmountToggle
