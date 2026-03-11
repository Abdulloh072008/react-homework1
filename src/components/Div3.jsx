import React from 'react'

const Div3 = ({children, name, about}) => {
  return (
    <div className='text-white md:w-139 flex flex-col items-center text-center lg:items-start lg:text-start gap-5'>
      <h2 className='md:text-[40px] text-[24px] font-bold'>{name}</h2>
      <p className='md:text-[18px] text-[16px]'>{about}</p>
      {children}
    </div>
  )
}

export default Div3
