import React from 'react'

const Card3 = ({img,name,plans,num1,num2,num3,num4,num5,num6,about,date,language,language1,pricetag,price,children}) => {
  return (
    <div className='shadow-[0px_0px_7px_gray] md:w-fit rounded-[5px] mt-10'>
      <div className='border-b border-[#E3E3E3] p-7'>
        <img className='block m-auto' src={img} alt="" />
        <p className='text-[20px] font-semibold w-67 text-center mt-5'>{name}</p>
      </div>
      <div className='px-7 border-b border-[#E3E3E3] pt-3 pb-10 h-65'>
        <h2 className='text-[18px] font-semibold'>{plans}</h2>
        <div className='flex flex-col gap-1 mt-5'>
            <p>{num1}</p>
            <p>{num2}</p>
            <p>{num3}</p>
            <p>{num4}</p>
            <p>{num5}</p>
            <p>{num6}</p>
        </div>
      </div>
      <div className='px-7 py-3 border-b border-[#E3E3E3] flex items-center justify-between'>
        <h2 className='text-[18px] font-semibold'>{about}</h2>
        <p className='text-[gray]'>{date}</p>
      </div>
      <div className='px-7 py-3 border-b border-[#E3E3E3] flex items-center justify-between'>
        <h2 className='text-[18px] font-semibold'>{language}</h2>
        <p className='text-[gray]'>{language1}</p>
      </div>
      <div className='px-7 py-3 flex items-center justify-between'>
        <h2 className='text-[18px] font-semibold'>{pricetag}</h2>
        <p className='text-[gray]'>{price}</p>
      </div>
      <div className='px-7 py-3 pb-5'>
      {children}
      </div>
    </div>
  )
}

export default Card3
