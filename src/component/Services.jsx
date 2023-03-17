import React from 'react'
import {FaRegListAlt} from 'react-icons/fa'
import { FiCheckCircle } from "react-icons/fi";
import { HiGlobeAlt } from "react-icons/hi";

const Services = () => {

  const iconStyles = {
    transition: 'transform 0.2s ease-in-out',
  }

 const handleIconHover = (e) => {
  e.target.style.transform = 'scale(1.2)';
}

const handleIconLeave = (e) => {
  e.target.style.transform = 'scale(1)';
}


  return (
    <div className="mx-auto max-w-full">
      <div className='sm:flex sm:flex-col sm:items-center flex-col'>
        <div className='text-white px-4 py-8 text-center sm:text-left'>
          <h1 className='text-4xl font-bold text-center'>Services</h1>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-8'>
          <div className='flex flex-col items-center sm:rounded-lg  py-8'>
            <div
              className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center mb-5"
              style={iconStyles}
              onMouseEnter={handleIconHover}
              onMouseLeave={handleIconLeave}
            >
              <FaRegListAlt size={30} className="text-black" />
            </div>
            <h1 className='text-lg font-bold mb-2 text-white' >Registration</h1>
            <p className='text-gray-400 text-center'>Register into our site by giving your information</p>
          </div>
          <div className='flex flex-col items-center sm:rounded-lg  py-8'>
            <div
              className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center mb-5"
              style={iconStyles}
              onMouseEnter={handleIconHover}
              onMouseLeave={handleIconLeave}
            >
              <FiCheckCircle size={30} className="text-black" />
            </div>
            <h1 className='text-lg font-bold mb-2 text-white'>Complete Profile</h1>
            <p className='text-gray-400 text-center'>Complete your profile to activate your account</p>
          </div>
          <div className='flex flex-col items-center sm:rounded-lg:last-child  py-8'>
            <div
              className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center mb-5"
              style={iconStyles}
              onMouseEnter={handleIconHover}
              onMouseLeave={handleIconLeave}
            >
              <HiGlobeAlt size={30} className="text-black" />
            </div>
            <h1 className='text-lg font-bold mb-2 text-white'>Connect</h1>
            <p className='text-gray-400 text-center'>Ready for collabs. DM for more. Keep it concise..</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
