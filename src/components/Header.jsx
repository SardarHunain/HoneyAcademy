import React from 'react'
import {AiOutlineMenu} from 'react-icons/ai';
import {AiOutlineClose} from 'react-icons/ai';
import {useState} from 'react';

export default function Header() {
 
    const[toggle,setToggle] = useState(false);

 
    return (
    <div className='bg-[#2699fb] p-4'>
        <div className='max-w-[1240px]  mx-auto flex justify-between items-center py-[12px]'>
            <div className='text-3xl font-bold '>
                HoneyAcademy
            </div>

            {
                toggle
                ?
                <AiOutlineClose className='text-white text-2xl md:hidden block' onClick = {()=>setToggle(!toggle)}/>
                :
                <AiOutlineMenu className='text-white text-2xl md:hidden block' onClick = {()=>setToggle(!toggle)}/>


            }

            <ul className='text-white hidden md:flex gap-10'>
                <li>
                    Home
                </li>
                <li>
                    About
                </li>
                <li>
                    Company
                </li>
                <li>
                    Resources
                </li>
                <li>
                    Contact
                </li>
                
            </ul>
            {/* responsive menu*/ }

            <ul className={`text-white duration-200 md:hidden fixed bg-black  top-[92px] w-full h-screen
            ${toggle ? 'left-[0]': 'left-[-100%]'}
            `}>
                <li className='p-5'>
                    Home
                </li>
                <li className='p-5'>
                    About
                </li>
                <li className='p-5'>
                    Company
                </li>
                <li className='p-5'>
                    Resources
                </li>
                <li className='p-5'>
                    Contact
                </li>
                
            </ul>


        </div>
    </div>
  )
}
