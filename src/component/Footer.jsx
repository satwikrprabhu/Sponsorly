import React from 'react'
import siteiconlogo from '/siteiconlogo.png'
import {FaInstagram,FaFacebook,FaGithub,FaLinkedin} from 'react-icons/fa'
import {Link} from 'react-router-dom'
export default function Footer() {
  return (
    <>
    <div className='max-w-[1240px] mx-auto py-12 px-4 grid lg:grid-cold-3 gap-8 text-gray-300'>
      
        <div className='lg:col-span-3 flex justify-between mt-6'>
        <div>
          <h6 className='font-bold text-gray-300'>Solutions</h6>
          <ul>
            <li className='py-2 text-sm hover:text-green-500 cursor-pointer'>Analytics</li>
            <li className='py-2 text-sm hover:text-green-500 cursor-pointer'>Marketing</li>
            <li className='py-2 text-sm hover:text-green-500 cursor-pointer'>Commerce</li>
            <li className='py-2 text-sm hover:text-green-500 cursor-pointer'>Insights</li>
          </ul>
        </div>

        <div>
          <h6 className='font-bold text-gray-300 '>Company</h6>
          <ul>
            <li className='py-2 text-sm hover:text-green-500 cursor-pointer'>Pricing</li>
            <li className='py-2 text-sm hover:text-green-500 cursor-pointer'>Documentation</li>
            <li className='py-2 text-sm hover:text-green-500 cursor-pointer'>Guides</li>
            <li className='py-2 text-sm hover:text-green-500 cursor-pointer'>Analysis</li>
          </ul>
        </div>

        <div>
          <h6 className='text-gray-300 font-bold'>Research</h6>
          <ul>
            <li className='py-2 text-sm hover:text-green-500 cursor-pointer'>Info</li>
            <li className='py-2 text-sm hover:text-green-500 cursor-pointer'>Creation</li>
            <li className='py-2 text-sm hover:text-green-500 cursor-pointer'>Innovate</li>
            <li className='py-2 text-sm hover:text-green-500 cursor-pointer'>Ideas</li>
          </ul>
        </div>
        </div>
        </div>


        <div className='flex flex-col md:flex-row justify-between items-center  max-w-[1240px] mx-auto px-4 pb-10'> 

      <Link to='/' className='text-3xl text-green-500 font-bold flex items-center justify-center py-4 cursor-pointer'>
       <img src={siteiconlogo} alt="logo of the website" className='w-8 h-8'/>
       <h1 className=''>SPONSORLY</h1></Link>

       <div className=''><p className='text-gray-400 text-center'>Sponsorly@2023 All rights reserved</p></div>

       <div className='flex justify-evenly md:justify-between items-center space-x-5 text-white py-5'>
          <FaInstagram size={30} className=' hover:text-green-500 cursor-pointer'/>
          <FaFacebook size={30} className=' hover:text-green-500 cursor-pointer'/>
          <FaLinkedin size={30} className=' hover:text-green-500 cursor-pointer'/>
          <FaGithub size={30} className=' hover:text-green-500 cursor-pointer'/>
        </div>
        
        </div>
    
    </>

  )
}
