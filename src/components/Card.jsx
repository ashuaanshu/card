import React from 'react'

const Card = () => {
  return (
   <div className='max-w-sm mx-auto bg-white shadow-md rounded-xl overflow-hidden md:flex '>
    <img src='dpp.jpg' alt='tera bhai jogender' className='h-48 w-full  object-cover md:w-48 md:shrink-0  '/>
    <div className='p-8'>
      <div className='font-bold uppercase tracking-wide text-sm'><a href='#'>Tera Bhai Joginder</a></div>
      <div><p className='font-sans'>THis is a box bole to card jo mene khud se bnane ki kosis ki hai </p>
      <button className=' rounded-md bg-blue-500 text-white hover:bg-blue-600 flex mx-auto'><a href='#'>Read More</a></button></div>
    </div>
    
   </div>
  )
}

export default Card
