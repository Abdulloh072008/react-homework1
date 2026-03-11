import React from 'react'

const Div1 = ({name, about,children}) => {
  return (
    <div className='md:w-167 flex flex-col gap-5 items-center lg:items-start'>
      <h2 className='md:text-[24px] text-[16px] text-[#1178B2]'>{name}</h2>
      <p className='md:text-[20px]  text-[16px]'>{about}</p>
      {children}
    </div>
  )
}

export default Div1
