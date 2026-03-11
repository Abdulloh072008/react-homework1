import React from 'react'
import footer from '../assets/Group 874.png'
import footer1 from '../assets/Group 928.png'
import footer3 from '../assets/Group 1065.png'

const Footer2 = () => {
  return (
    <div className='mt-4'>
      <img className='lg:block hidden ' src={footer} alt="" />
      <img className='hidden md:block lg:hidden' src={footer1} alt="" />
      <img className='block md:hidden w-full' src={footer3} alt="" />
    </div>
  )
}

export default Footer2
