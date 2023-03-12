import React, {useState} from 'react'
import LoginButton from './LoginButton'
import {NavLink,Link} from 'react-router-dom'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import siteiconlogo from '/siteiconlogo.png'
const Navbar = () => {
 
  const [nav,setNav] = useState(true)

  const handleNav = () => setNav(!nav)



  return (
    <div className='flex justify-between items-center max-w-[1240px] mx-auto px-4 h-20 text-white'>
       <Link to='/' className='w-full text-[2rem] z-50  md:text-4xl font-bold flex items-center'> 
       <img src={siteiconlogo} alt="logo of the website" className='w-8 h-8'/>
       <h1 className='ml-2'>SPONSORLY</h1></Link>

        <ul className='hidden md:flex font-semibold '>
          <NavLink to='/' className='p-5 hover:text-green-0 cursor-pointer duration-200'>Home</NavLink>
          <NavLink to='about' className='p-5 hover:text-green-0 cursor-pointer duration-200'>About</NavLink>
          <NavLink to='contact' className='p-5 hover:text-green-0 cursor-pointer duration-200'>Contact</NavLink>
          <NavLink to='services' className='p-5 hover:text-green-0 cursor-pointer duration-200'>Services</NavLink>
        </ul>
        <Link to='login' className='font-Codec'><LoginButton/></Link>
        


        <div onClick={handleNav} className='z-50 block md:hidden cursor-pointer'>
         {!nav?<AiOutlineClose size={20}/>:<AiOutlineMenu size={20}/>}
        </div>


        <div className={!nav?' top-0 w-[55%] md:hidden fixed uppercase h-full  bg-[#0b0438] ease-in-out duration-500':'fixed top-[-100%]'}>
          <ul className='py-4 mt-16'>
          <li className='py-4  hover:text-green-0 duration-400 cursor-pointer border-b border-gray-500'><NavLink to='/'>Home</NavLink></li>
          <li className='py-4  hover:text-green-0 duration-400 cursor-pointer border-b border-gray-500'><NavLink to='/about'>About</NavLink></li>
          <li className='py-4  hover:text-green-0 duration-400 cursor-pointer border-b border-gray-500'><NavLink to='/contact'>Contact</NavLink></li>
          <li className='py-4  hover:text-green-0 duration-400 cursor-pointer d border-b border-gray-500'><NavLink to='/services'>Services</NavLink></li>
          </ul>
        </div>

    </div>
  )
}

export default Navbar