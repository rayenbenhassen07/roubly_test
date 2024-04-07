import React from 'react'
import Image from 'next/image'

const Client = () => {
  return (
    <div className='w-full map text-center text-white py-10  lg:mb-0'>
      
      <h2 className='space-x-5 tracking-widest text-sm lg:text-lg font-semibold text-blue-500'>FROM EVERY CORNER OF THE GLOBE</h2>
     
      <h1 className='space-x-5 tracking-widest text-lg lg:text-3xl font-extrabold'>Join clients all around the world.</h1>
      
      <div className='flex flex-col lg:flex-row justify-center items-center gap-10 lg:mx-20 mx-2 '>

      <Image
            src="/Client/map.png"
            width={800}
            height={210}
            className=" "
            alt="Picture of the author"
       />

      </div>
      
      
    </div>
  )
}

export default Client