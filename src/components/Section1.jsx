import React from 'react'

const Section1 = ({name , children , about}) => {
  return (
    <div className='text-white max-w-300 w-[90%] m-auto flex flex-col lg:items-start items-center py-25 pb-35'>
      <h1 className='md:text-[43px] text-[30px] text-center lg:text-start ' >{name}</h1>
      <p className='my-7'>{about}</p>
      {children}
    </div>
  )
}

export default Section1
