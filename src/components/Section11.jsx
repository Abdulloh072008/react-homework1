import React from 'react'

const Section11 = ({ children, name, about }) => {
    return (
        <div className='max-w-300 w-[90%] m-auto pb-15'>
            <h1 className='text-[35px] text-[blue] lg:text-start text-center'>Кто мы?</h1>
            <div className='flex lg:justify-between items-center flex-wrap text-center lg:text-start justify-center'>
            {children}
            <div className='w-141  md:text-[20px]'>
                <p>{name}</p>
                <p className='lg:mt-10 mt-3'>{about}</p>
            </div>
            </div>
        </div>
    )
}

export default Section11
