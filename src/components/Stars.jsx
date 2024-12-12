import React from 'react'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/ai';

const Stars = ({stars, reviews }) => {

    const ratingStar = Array.from({length: 5}, (elem,index) => {
        //half star dikhane ke liye
        let number = index + 0.5;

        return (
            <span key={index}>
                {
                    stars >= index + 1 
                    ? <FaStar/>
                    : stars >= number 
                    ? <FaStarHalfAlt />
                    : <AiOutlineStar />
                }
            </span>
        )
    })
  return (
    <div className='flex mt-2 items-center gap-2 mb-1'>
        <p className='text-yellow-400 flex flex-row'>{ratingStar}</p>
        <p>({reviews} customer reviews)</p>
    </div>
  )
}

export default Stars

