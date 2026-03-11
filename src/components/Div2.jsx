import React from 'react'
import group from '../assets/Group 667.png'

const Div2 = () => {
  return (
    <div className='shadow-[0px_0px_7px_gray] rounded-[5px] mt-10'>
      <div className='flex md:justify-between items-center py-3 px-10 border-b border-[lightgray] flex-wrap gap-2 justify-center text-center '>
        <div className='flex items-center gap-2 lg:gap-5 flex-wrap'>
            <p className='text-[20px] text-[blue] m-auto'>Модуль 1</p>
            <p className='text-[20px] '>Тенденции и тренды современного мира</p>
        </div>
        <img src={group} alt="" />
      </div>
      <p className='py-4 px-10 border-b border-[lightgray] text-[gray]'>Тема 1. Куда движутся IT тренды? Аналитика Gartner, разбор отчетов консалтинговых компаний</p>
      <p className='py-4 px-10 border-b border-[lightgray] text-[gray]'>Тема 2. Рынки Ближнего Востока, Азии, Латинской АмерикиТема</p>
      <p className='py-4 px-10 border-b border-[lightgray] text-[gray]'> 3. Что такое внутренние и внешние инновации? Как искать инновационные идеи?</p>
      <p className='py-4 px-10  text-[blue]'>9 видео роликов, вебинар с приглашенным экспертом</p>
    </div>
  )
}

export default Div2
