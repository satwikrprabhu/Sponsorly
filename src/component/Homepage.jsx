import React from 'react'

export default function Homepage() {
  return (<>
 <div className="h-screen w-full bg-cover bg-no-repeat flex items-center justify-center" style={{backgroundImage: `url('https://www.futureswap.com/images/Graphic-Blue-Wave.svg'), url('https://www.futureswap.com/images/Graphic-Purple-Wave.svg')`}}>
  <div className="mx-auto max-w-3xl md:max-w-5xl lg:max-w-7xl px-4 md:px-8 lg:px-16 py-12 md:py-24 ml-0 ">
    <p className="tracking-widest text-white text-sm md:text-base text-left font-medium mb-8 md:mb-12">NOW ADVERTISE YOUR PRODUCTS ON SOCIAL MEDIA WITH SPONSORLY</p>
    <h1 className="text-green-500 text-4xl md:text-6xl lg:text-8xl font-bold text-left mb-6 md:mb-12 font-Codec">Ready To Connect?</h1>
    <p className="text-white text-sm md:text-base text-left tracking-widest font-normal mb-6 md:mb-12">Boost your social media career with us Unleash the influencer in you Make the best of your content</p>
    <button className="border-2 border-green-500 text-green-500 px-6 py-2 text-xs md:text-sm font-bold rounded-full hover:text-green-300 hover:border-green-300 justify-center block">Let's Connect</button>
  </div>
</div>

<div className='mt-8 md:mt-32 mx-auto flex flex-col md:flex-row items-center'>
  <div className='md:w-1/4 flex justify-center'>
    <img src="./images/Frame.png" alt="" className='md:pl-24 mx-auto mt-6 md:mt-0 mb-6 md:mb-0 w-1/2 md:w-full' />
  </div>
  <div className='md:w-3/4 px-4 py-8 md:px-20 md:py-10 flex flex-col justify-center'>
    <h1 className='text-green-500 text-4xl md:text-7xl font-serif text-center md:text-left font-Codec'>SPONSORLY</h1>
    <p className='text-white text-lg tracking-widest my-8 md:my-12 font-semibold text-justify text-center md:text-left md:pr-14'>
      Sponsorly is a user-friendly website where people can connect with content creators and promote their products, business, or pages.
    </p>
    <button className='mx-auto mt-6 md:mt-8 bg-green-500 px-4 py-2 text-primary font-bold rounded-full hover:bg-green-300'>INFO</button>
  </div>
</div>

      <div className="flex flex-col md:flex-row">
  <div className="md:w-2/4">
    <h1 className="text-green-500 text-6xl m-14 font-Codec">Our Services</h1>
    <p className="text-white text-xl m-14 font-semibold text-justify">
      We build meaningful relationships between brands and creators. This platform provides a space where brands can easily connect with network of active influencers.
      Services
    </p>
    <button className="mx-6 my-4 text-xs border-2 border-green-500 px-4 py-2 text-green-500 font-bold rounded-full  justify-center hover:text-green-300 hover:border-green-300 ">Services</button>
  </div>
  <div className="md:w-2/4 flex justify-center">
    <img src="./images/last.png" className="w-4/5 lg:w-3/5" />
  </div>
</div>

    
    
    </>
    
  )
}