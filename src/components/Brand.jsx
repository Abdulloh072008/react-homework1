import React from 'react'
import img1 from '../assets/Снимок экрана 2022-09-08 в 1.50.png'
import img2 from '../assets/Снимок экрана 2022-09-08 в 1.50 (1).png'
import img3 from '../assets/Dealroom 1.png'
import img4 from '../assets/unnamed 1.png'
import img5 from '../assets/f6s 3.png'
import img6 from '../assets/B1i30JrIEAE3bt1 1.png'

const Brand = () => {
  return (
    <div className='grid grid-cols-2 grid-rows-3 w-90 h-70 gap-5'>
      <div className='bg-white rounded-[5px] shadow-[0px_0px_5px_gray] flex items-center justify-center'>
        <img className='w-30 md:w-35' src={img1} alt="" />
      </div>
      <div className='bg-white rounded-[5px] shadow-[0px_0px_5px_gray] flex items-center justify-center'>
        <img className='w-30 md:w-35' src={img2} alt="" />
      </div>
      <div className='bg-white rounded-[5px] shadow-[0px_0px_5px_gray] flex items-center justify-center'>
        <img className='w-30 md:w-35' src={img3} alt="" />
      </div>
      <div className='bg-white rounded-[5px] shadow-[0px_0px_5px_gray] flex items-center justify-center'>
        <img className='w-25 md:w-25' src={img4} alt="" />
      </div>
      <div className='bg-white rounded-[5px] shadow-[0px_0px_5px_gray] flex items-center justify-center'>
        <img className='w-15 md:w-15' src={img5} alt="" />
      </div>
      <div className='bg-white rounded-[5px] shadow-[0px_0px_5px_gray] flex items-center justify-center'>
        <img className='w-20 md:w-15' src={img6} alt="" />
      </div>
    </div>
  )
}

export default Brand
