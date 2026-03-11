import React from 'react'
import group from '../assets/Group 815.png'
import group1 from '../assets/Group 857.png'
import Greenbtn from './Greenbtn'

const Footer = () => {
  return (
    <div style={{backgroundImage:`url(${group})`}} className='bg-no-repeat bg-cover py-15'>
      <div className='max-w-300 w-[90%] m-auto flex justify-between items-center flex-wrap'>
        <div className='text-white flex flex-col gap-10 lg:gap-22'>
            <div className='ml-8'>
            <p className='text-[36px] font-semibold'>Остались вопросы?</p>
            <p>Оставьте заявку и наша команда свяжется с вами</p>
            </div>
            <div>
                <p className='ml-8 font-semibold text-[18px]'>Или напишите нам:</p>
                <img  src={group1} alt="" />
            </div>
        </div>
        <div className='w-full'>
            <div className='bg-white lg:w-120 flex flex-col gap-3 rounded-[10px] py-5 px-7'>
                <input className='border-b outline-none  border-[lightgray]  pb-3' type="text" placeholder='Имя'/>
                <input className='border-b outline-none  border-[lightgray]  pb-3' type="text" placeholder='Почта'/>
                <input className='border-b outline-none  border-[lightgray]  pb-3' type="text" placeholder='(971)'/>
                <Greenbtn name="Оставить заявку" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
