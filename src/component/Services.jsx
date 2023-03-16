import React from 'react'
import {FaRegListAlt} from 'react-icons/fa'
import { FiCheckCircle } from "react-icons/fi";
import { HiGlobeAlt } from "react-icons/hi";

const Services = () => {
  return (
    <div class="mx-auto max-w-9xl">
  <div class='sm:flex sm:flex-col sm:items-center flex-col'>
    <div class='text-white px-4 py-8 text-center sm:text-left'>
      <h1 class='text-4xl font-bold text-center'>Services</h1>
    </div>
    <div class='grid grid-cols-1 sm:grid-cols-3 gap-8'>
      <div class='flex flex-col items-center sm:rounded-lg  py-8'>
        <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center hover:bg-green-300 mb-5">
          <FaRegListAlt size={30} className="text-black" />
        </div>
        <h1 class='text-lg font-bold mb-2 text-white' >Registration</h1>
        <p class='text-gray-400 text-center'>Register into our site by giving your information</p>
      </div>
      <div class='flex flex-col items-center sm:rounded-lg  py-8'>
        <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center hover:bg-green-300 mb-5">
          <FiCheckCircle size={30} className="text-black" />
        </div>
        <h1 class='text-lg font-bold mb-2 text-white'>Complete Profile</h1>
        <p class='text-gray-400 text-center'>Complete your profile to activate your account</p>
      </div>
      <div class='flex flex-col items-center sm:rounded-lg:last-child  py-8'>
        <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center hover:bg-green-300 mb-5">
          <HiGlobeAlt size={30} className="text-black" />
        </div>
        <h1 class='text-lg font-bold mb-2 text-white'>Connect</h1>
        <p class='text-gray-400 text-center'>Ready for collabs. DM for more. Keep it concise..</p>
      </div>
    </div>
  </div>
</div>



  )
}

export default Services