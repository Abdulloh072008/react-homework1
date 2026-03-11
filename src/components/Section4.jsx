import React from 'react'
import group from '../assets/Group 757.png'

const Section4 = ({ name, about,children }) => {
    return (
        <div style={{backgroundImage:`url(${group})`}} className='bg-cover bg-no-repeat'>
            <div className='flex flex-col items-center gap-5 text-white max-w-300 w-[90%] m-auto py-20 my-15'>
                <h1 className='text-center'> <span className='bg-[#07AF91] md:text-[40px] text-[24px] text-center px-5'>{name}</span></h1>
                <p className='md:text-[24px] text-[18px] text-center'>{about}</p>
                {children}
            </div>
        </div>
    )
}

export default Section4
