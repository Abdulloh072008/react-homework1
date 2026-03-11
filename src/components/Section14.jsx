import React from 'react'
import left from '../assets/left.png'

const Section14 = ({ name, img, about }) => {
    return (
        <div>
            <div className='w-fit flex flex-col items-center gap-1 text-center'>
                <img src={img} alt="" />
                <h3 className='text-[18px] font-semibold'>{name}</h3>
                <p className='w-57 text-[16.8px]'>{about}</p>
            </div>
        </div>
    )
}

export default Section14
