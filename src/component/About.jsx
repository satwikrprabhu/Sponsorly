import React from 'react'
import Frame from '/Frame.png'

const About = () => {
  return (
    <div className=' max-w-6xl mt-8 md:mt-32 mx-auto flex flex-col md:flex-row items-center'>
  <div className='md:w-1/4 flex justify-center'>
  <img src={Frame} alt="" className='md:ml-18 mx-auto mt-6 md:my-0 mb-6 w-1/2 md:w-full shadow-lg shadow-indigo-500/200' />
  </div>
  <div className='md:w-3/4 px-4 py-8 md:px-20 md:py-10 flex flex-col justify-center'>
  <h1 className='text-green-500 text-4xl md:text-6xl text-center font-semibold md:text-left font-Codec'>About Us</h1>
    <p className='text-white text-lg tracking-widest my-8 md:my-4 font-semibold text-justify md:text-left'>
    Sponsorly is an innovative platform that aims to bridge the gap between content creators and businesses looking to promote their products or services. With its user-friendly interface, Sponsorly makes it easy for people to connect with influencers and other content creators, and to create effective marketing campaigns that reach a wider audience.Sponsorly provides a range of features and tools to help you achieve your goals.
    </p>
</div>
</div>
  )
}

export default About