import React from 'react'
import group from '../assets/Снимок экрана 2022-09-08 в 1.50 (2).png'
import dealroom from '../assets/Dealroom 1 (1).png'
import group2 from '../assets/Снимок экрана 2022-07-01 в 5.07 1.png'
import group3 from '../assets/Снимок экрана 2022-07-01 в 5.09 1.png'
import group4 from '../assets/Снимок экрана 2022-11-19 в 7.52.png'
import group5 from '../assets/png-clipart-in5-tech-entrepreneurship-tecom-group-startup-company-technology-others-miscellaneous-text-removebg-preview 1.png'
import group6 from '../assets/Снимок экрана 2022-11-19 в 7.54.png'
import group7 from '../assets/header-logo 1.png'

const Section15 = () => {
    return (
        <div className='max-w-300 w-[90%] m-auto pb-15'>
            <h1 className='text-[35px] text-[blue]'>Наши партнеры</h1>
            <div className='grid lg:grid-cols-4 lg:grid-rows-2 grid-cols-2 grid-rows-4 mt-10 lg:w-200 lg:h-35 md:h-90 md:w-130 w-85 h-75 gap-3'>
                <div className='shadow-[0px_0px_7px_gray] rounded-[5px] flex items-center justify-center'>
                    <img className='w-30 md:w-35' src={group} alt="" />
                </div>
                <div className='shadow-[0px_0px_7px_gray] rounded-[5px] flex items-center justify-center'>
                    <img className='w-30 md:w-35' src={dealroom} alt="" />
                </div>
                <div className='shadow-[0px_0px_7px_gray] rounded-[5px] flex items-center justify-center'>
                    <img className='w-30 md:w-25' src={group2} alt="" />
                </div>
                <div className='shadow-[0px_0px_7px_gray] rounded-[5px] flex items-center justify-center'>
                    <img className='w-12 md:w-12' src={group3} alt="" />
                </div>
                <div className='shadow-[0px_0px_7px_gray] rounded-[5px] flex items-center justify-center'>
                    <img className='w-30 md:w-35' src={group4} alt="" />
                </div>
                <div className='shadow-[0px_0px_7px_gray] rounded-[5px] flex items-center justify-center'>
                    <img className='w-12 md:w-12' src={group5} alt="" />
                </div>
                <div className='shadow-[0px_0px_7px_gray] rounded-[5px] flex items-center justify-center'>
                    <img className='w-30 md:w-35' src={group6} alt="" />
                </div>
                <div className='shadow-[0px_0px_7px_gray] rounded-[5px] flex items-center justify-center'>
                    <img className='w-30 md:w-30' src={group7} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Section15
3