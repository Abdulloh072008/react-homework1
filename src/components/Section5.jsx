import React from 'react'
import Greenbtn from './Greenbtn'
import Bluebtn from './Bluebtn'
import group from '../assets/Group 661.png'

const Section5 = ({children}) => {
    return (
        <section className='max-w-300 w-[90%] m-auto py-15'>
            <h1 className='md:text-[36px] text-[blue] text-[20px]'>С какими рынками мы работаем?</h1>
            <div className='flex items-center overflow-auto mt-10'>
                <button className='bg-[#88BBD8] h-15 md:px-15 px-25 hover:text-[white] border-r text-white border-[#CFDDEB] hover:rounded-[5px] hover:bg-[#88BBD8]'>Ближний восток</button>
                <button className='bg-[#EEF1F4] h-15 md:px-15 px-25 hover:text-[white] border-r border-[#CFDDEB] hover:rounded-[5px] hover:bg-[#88BBD8] '>Азия</button>
                <button className='bg-[#EEF1F4] h-15 md:px-15 px-25 hover:text-[white] border-r border-[#CFDDEB] hover:rounded-[5px] hover:bg-[#88BBD8] '>Латинская Америка</button>
                <button className='bg-[#EEF1F4] h-15 md:px-15 px-25 hover:text-[white]  hover:rounded-[5px] hover:bg-[#88BBD8] '>Африка</button>
            </div>
            <div className='flex justify-between items-center max-w-250 mt-10 md:flex-nowrap flex-wrap'>
                <div className='w-73 flex flex-col gap-10'>
                    <h1 className='text-[32px]'>Чем интересен
                        <span className='text-[#07AF91]'> Рынок MENA:</span></h1>
                    <p>ОАЭ, Саудовская Аравия,
                        Израиль, Оман, Бахрейн, Катар,
                        Тунис, Йемен, Египет, Алжир</p>
                        <span className='hidden md:block'>
                    <Bluebtn name="Выйти на рынок" />
                        </span>
                </div>
                <div className='grid md:grid-cols-2 md:grid-rows-2 grid-cols-1 grid-rows-4 md:w-fit gap-10 w-full mt-10'>
                    <div className='shadow-[0px_0px_10px_gray] md:w-full py-10 px-7 rounded-2xl text-center '>
                        <h1 className='text-[#87BBD8] text-[48px] font-bold'> 5,5 <span className=' font-bold text-[24px]'>Млрд</span> </h1>
                        <p>Инвестиции pre-seed, seed</p>
                    </div>
                    <div className='shadow-[0px_0px_10px_gray] md:w-full py-10 px-7 rounded-2xl text-center '>
                        <h1 className='text-[#87BBD8] text-[48px] font-bold'> 300 </h1>
                        <p>Акселераторов, инкубаторов</p>
                    </div>
                    <div className='shadow-[0px_0px_10px_gray] md:w-full py-10 px-7 rounded-2xl text-center '>
                        <h1 className='text-[#87BBD8] text-[48px] font-bold'> 73 </h1>
                        <p>Венчурных фонда</p>
                    </div>
                    <div className='bg-[#1178B2] text-white flex flex-col gap-3 items-center shadow-[0px_0px_10px_gray] md:w-full py-10 px-7 rounded-2xl text-center '>
                        <h1 className='text-[#87BBD8] text-[48px] font-bold '> <span><img src={group} alt="" /></span> </h1>
                        <p>Скачать отчет <br />
                        по рынку MENA</p>
                    </div>
                </div>
            </div>
            <span className=' md:hidden flex justify-center mt-10 '>
            {children}
            </span>
            
        </section>
    )
}

export default Section5
