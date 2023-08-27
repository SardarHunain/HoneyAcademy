import React from 'react'


export default function Newsletter() {
  return (
    <div className = 'w-full bg-[#2699fb] p-4 '>
        <div className=" max-w-[1240px] max-auto md:flex justify-between py-[50px]">
            <div className='m-2'>
                <h1 className='font-bold text[20px] md:text-[40px] text-white'>
                    Want to Learn Latest I.T Skills
                </h1>
                <span className='text-white'>
                    Signup to Our Newsletter and Stay up to date
                </span>
            </div>
            <div className='m-2'>
                <input type='email' className='sm:w-full p-3 mr-2 text-slate-300 rounded-2xl mb-2' placeholder='Email here'/>
                <button className='bg-black text-white p-3 rounded-2xl hover:bg-indigo-900'>
                    Notify Me
                </button>
                <br/>
                <p className='text-white'>
                    We care about protection of your data. Read our<br/>
                    <a href='/' className='text-black font-bold'> Privacy Policy.</a>
                </p>

            </div>
        </div>
    </div>
  )
}
