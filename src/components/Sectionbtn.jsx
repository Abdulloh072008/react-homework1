import React from 'react'
import wats from '../assets/WhatsApp_white.png'

const Sectionbtn = () => {
  return (
    <div className='flex items-center justify-between max-w-350 w-[90%] m-auto py-10'>
      <button className='bg-[green] text-white py-4 lg:py-2 px-5 rounded-[5px] lg:w-fit w-full ' >Связаться с нами</button>
      <img className='hidden lg:block' src={wats} alt="" />
    </div>
  )
}

export default Sectionbtn
