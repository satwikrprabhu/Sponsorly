import React from 'react'

const About = () => {
  return (
    <div className='mt-8 md:mt-32 mx-auto flex flex-col md:flex-row items-center'>
  <div className='md:w-1/4 flex justify-center'>
    <img src="./images/Frame.png" alt="" className='md:pl-24 mx-auto mt-6 md:mt-0 mb-6 md:mb-0 w-1/2 md:w-full' />
  </div>
  <div className='md:w-3/4 px-4 py-8 md:px-20 md:py-10 flex flex-col justify-center'>
    <h1 className='text-green-500 text-4xl md:text-7xl text-center md:text-left font-Codec'>SPONSORLY</h1>
    <p className='text-white text-lg tracking-widest my-8 md:my-12 font-semibold text-justify md:text-left md:pr-14'>
      Sponsorly is a user-friendly website where people can connect with content creators and promote their products, business, or pages.
    </p>
  </div>
</div>
  )
}

export default About