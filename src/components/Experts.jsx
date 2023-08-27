import React from 'react'
import laptop from '../assets/laptop.jpg'

export default function Experts() {
  return (
    <div className = 'max-w-[1240px] my-10 mx-auto p-2 md:grid grid-cols-2'>
        <div className='col-span-1 md:w-[80%]'>
            <img src={laptop} alt='pic' className=' rounded-3xl mx-auto'/>
        </div>
        <div className='  col-span-1 flex flex-col justify-center'>
            <h1 className='text-[#00df9a] font-bold my-2'>
                Learn from Experts
            </h1>
            <p className='my-2 text-justify'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac nisi ullamcorper, vulputate justo id, gravida mauris. Etiam rhoncus, lacus vel blandit commodo, urna tortor maximus felis, a ullamcorper diam diam in ante. Nulla facilisi. Curabitur sit amet augue suscipit, egestas ex ut, tempor nunc.

            </p>
            <button className='bg-black text-white p-3 mt-3 rounded-2xl inline w-[30%] hover:bg-indigo-900'>
                Get Started
            </button>
        </div>
        
    </div>
  )
}
