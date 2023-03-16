import React from 'react'
import icon1 from '/icon1.png'
const Services = () => {
  return (
    <div class="mx-auto max-w-4xl">
  <div class='sm:flex sm:flex-col sm:items-center flex-col'>
    <div class='text-white px-4 py-8 text-center sm:text-left'>
      <h1 class='text-3xl font-bold'>How to Start</h1>
    </div>
    <div class='grid grid-cols-1 sm:grid-cols-3 gap-8'>
      <div class='flex flex-col items-center bg-white rounded-lg shadow-lg p-8'>
        <img src={icon1} alt='' class='w-20 h-20 mb-4' />
        <h1 class='text-lg font-bold mb-2'>Registration</h1>
        <p class='text-gray-600 text-center'>Register into our site by giving your information</p>
      </div>
      <div class='flex flex-col items-center bg-white rounded-lg shadow-lg p-8'>
        <img src={icon1} alt='' class='w-20 h-20 mb-4' />
        <h1 class='text-lg font-bold mb-2'>Complete Profile</h1>
        <p class='text-gray-600 text-center'>Complete your profile to activate your account</p>
      </div>
      <div class='flex flex-col items-center bg-white rounded-lg shadow-lg p-8'>
        <img src={icon1} alt='' class='w-20 h-20 mb-4' />
        <h1 class='text-lg font-bold mb-2'>Connect</h1>
        <p class='text-gray-600 text-center'>You are now ready to start! Send one to one collab requests and more.</p>
      </div>
    </div>
  </div>
</div>

  )
}

export default Services