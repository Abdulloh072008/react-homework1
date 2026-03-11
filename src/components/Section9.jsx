import React from 'react'
import group from '../assets/Group 796.png'

const Section9 = ({ children }) => {
    return (
        <div style={{backgroundImage:`url(${group})`}} className='bg-no-repeat bg-cover py-15'>
            <div className='max-w-300 w-[90%] m-auto flex justify-center lg:justify-between items-center flex-wrap gap-5'>
                {children}
            </div>
        </div>
    )
}

export default Section9
