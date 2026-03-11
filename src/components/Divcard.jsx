import React from 'react'

const Divcard = ({name , imgnum}) => {
  return (
    <div className='shadow-[0px_0px_10px_gray] w-[90%] md:w-60 lg:w-90 flex flex-col gap-5 items-center py-10  rounded-[5px]'>
      <img src={imgnum} alt={name} />
      <h3>{name}</h3>
    </div>
  )
}

export default Divcard
