import React from 'react'


export default function Plans() {
  return (
    <div className='py-[100px] px-2'>
        <div className='md:grid grid-cols-3 max-w-[1240px] mx-auto gap-6 text-center '>
            <div  className='shadow-xl my-5 h-[500px] hover:scale-105 duration-500'>
                <h1 className='font-bold text-xl mt-12'>
                    Web Development
                </h1>
                <span className='text-2xl font-bold'>
                    $149
                </span>
                <p className='text-justify p-[30px]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Sed sodales lorem a purus pellentesque pharetra.<br/> Nullam imperdiet congue magna, non porttitor ipsum dignissim quis.<br/> Nam mollis risus a ante maximus, eu placerat risus tincidunt. <br/>Sed hendrerit mauris id dolor tincidunt venenatis.
                </p>
                <button className='bg-green-400 text-black font-bold p-3 rounded-xl  hover:bg-black hover:text-green-400'>
                    Start Trial
                </button>
            </div>
            <div className='shadow-xl my-5 h-[500px] bg-gray-100  hover:scale-105 duration-500'>
                <h1 className='font-bold text-xl  mt-12'>
                    Digital Marketing
                </h1>
                <span className='text-2xl font-bold'>
                    $149
                </span>
                <p className='text-justify p-[30px]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Sed sodales lorem a purus pellentesque pharetra.<br/> Nullam imperdiet congue magna, non porttitor ipsum dignissim quis.<br/> Nam mollis risus a ante maximus, eu placerat risus tincidunt. <br/>Sed hendrerit mauris id dolor tincidunt venenatis.
                </p>
                <button className='bg-green-400 text-black font-bold p-3 rounded-xl  hover:bg-black hover:text-green-400'>
                    Start Trial
                </button>
            </div>
            <div className='shadow-xl my-5 h-[500px] hover:scale-105 duration-500'>
                <h1 className='font-bold text-xl mt-12'>
                    App Development
                </h1>
                <span className='text-2xl font-bold'>
                    $149
                </span>
                <p className='text-justify p-[30px]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Sed sodales lorem a purus pellentesque pharetra.<br/> Nullam imperdiet congue magna, non porttitor ipsum dignissim quis.<br/> Nam mollis risus a ante maximus, eu placerat risus tincidunt. <br/>Sed hendrerit mauris id dolor tincidunt venenatis.
                </p>
                <button className='bg-green-400 text-black font-bold p-3 rounded-xl  hover:bg-black hover:text-green-400'>
                    Start Trial
                </button>
            </div>
        </div>
    </div>
  )
}
