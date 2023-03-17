import React from 'react'

export default function Homepage() {
  return (<>
        <div className="h-screen w-full bg bg-no-repeat flex mt-16 md:mt-32 justify-center" style={{backgroundImage: `url('https://www.futureswap.com/images/Graphic-Blue-Wave.svg'), url('https://www.futureswap.com/images/Graphic-Purple-Wave.svg')`}}>
  <div className="mx-auto max-w-3xl md:max-w-5xl lg:max-w-7xl md:px-8 lg:px-16 md:py-12 ml-4 ">
    <p className="tracking-widest text-green-0 text-[1.1rem] md:text-base text-left font-semibold mb-12 md:mb-12">NOW ADVERTISE YOUR PRODUCTS ON SOCIAL MEDIA WITH SPONSORLY</p>
    <h1 className="text-white text-6xl md:text-6xl lg:text-8xl font-bold text-left mb-12 md:mb-12 font-Codec">Ready To Connect?</h1>
    <p className=" text-gray-400 text-[1.1rem] pr-10 md:text-base text-left tracking-widest font-normal mb-16 md:mb-12">Boost your social media career with us Unleash the influencer in you. <span>Make the best of your content</span>
   </p>
    <button className="border-2 border-green-500 text-green-500 px-6 py-2 text-[1rem] md:text-sm font-bold rounded-full hover:text-green-300 hover:border-green-300 justify-center block">Let's Connect</button>
  </div>
</div>
    </>
    
  )
}