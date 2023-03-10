import React, {useState} from 'react'
import LoginButton from './LoginButton'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
const Navbar = () => {
 
  const [nav,setNav] = useState(true)

  const handleNav = () => setNav(!nav)



  return (
    <div className='flex justify-between items-center max-w-[1240px] mx-auto px-5 h-20 text-white'>
        <h1 className='w-full text-[2rem] z-50 text-green-500 md:text-4xl font-bold'>SPONSORLY</h1>
        <ul className='hidden md:flex font-semibold'>
          <li className='p-6 hover:text-green-0 cursor-pointer duration-200'>Home</li>
          <li className='p-6 hover:text-green-0 cursor-pointer duration-200'>About</li>
          <li className='p-6 hover:text-green-0 cursor-pointer duration-200'>Contact</li>
          <li className='p-6 hover:text-green-0 cursor-pointer duration-200'>Services</li>
        </ul>
        <div className='font-Codec'><LoginButton/></div>
        


        <div onClick={handleNav} className='z-50 block md:hidden'>
         {!nav?<AiOutlineClose size={20}/>:<AiOutlineMenu size={20}/>}
        </div>


        <div className={!nav?' top-0 w-[55%] md:hidden fixed uppercase h-full  bg-[#0b0438] ease-in-out duration-500':'fixed top-[-100%]'}>
          <ul className='py-4 mt-16'>
          <li className='py-4  hover:text-green-0 duration-400 cursor-pointer border-b border-gray-500'>Home</li>
          <li className='py-4  hover:text-green-0 duration-400 cursor-pointer border-b border-gray-500'>About</li>
          <li className='py-4  hover:text-green-0 duration-400 cursor-pointer border-b border-gray-500'>Contact</li>
          <li className='py-4  hover:text-green-0 duration-400 cursor-pointer d border-b border-gray-500'>Services</li>
          </ul>
        </div>

    </div>
  )
}

export default Navbar