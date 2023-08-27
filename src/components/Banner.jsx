import React from 'react'
import Typed from 'react-typed';

export default function Banner() {
  return (
    <div className='bg-[#2699fb] w-full py-[100px]'>
        <div className='max-w-[1240px] mx-auto text-center my-[100px]'>
            <div className='text-xl md:text-3xl font-bold mt-4 md:p-[24px]'>
                Learn With Us
            </div>
            <div className='text-white font-bold text-3xl md:text-[60px] mt-4 md:p-[24px]'>
                Grow With Us.
            </div>
            <div className='text-[20px] md:text-[50px] text-white font-bold mt-4 md:p-[24px]'>
                Learn 
                <Typed className='pl-3'
                    strings={['Web Development','Digital Marketing','Ethical Hacking','Machine Learning']}
                    typeSpeed={100}
                    backSpeed={80}
                    loop={true}
                />
            </div>
            <button className='bg-black text-white p-3 rounded-2xl hover:bg-indigo-900'>
                Get Started
            </button>

        </div>
    </div>
  )
}
