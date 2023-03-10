import React from 'react'

export default function Homepage() {
  return (<>
 <div className='flex flex-col md:flex-row'>
        <div className='md:w-1/2'>
          <div className='m-4 md:m-14'>
            <p className='tracking-widest text-white mx-6 my-12 text-lg md:text-2xl text-justify font-semibold'>NOW ADVERTISE YOUR PRODUCTS ON SOCIAL MEDIA WITH SPONSORLY</p>
            <h1 className='text-green-500 mx-6 my-6 text-4xl md:text-6xl font-serif'>Ready To Connect?</h1>
            <p className='text-white text-lg md:text-2xl mx-6 my-6 tracking-widest text-justify font-semibold'>Boost your social media career with us 

              Unleash the influencer in you 

              Make the best of your content</p>
            <button className='mx-6 my-4 text-xs border-2 border-green-500 px-4 py-2 text-green-500 font-bold rounded-full hover:bg-black justify-center'>Lets Connect</button>
          </div>
        </div>
        <div className='md:w-1/2'>
          <img src="./images/gra.png" className='w-full md:object-cover' alt="" />
        </div>
      </div>


      <div className='flex flex-col md:flex-row'>
        <div className='md:w-1/4 '>
          <img src="./images/Frame.png" alt="" className='mx-auto mt-6 md:mt-48 mb-6 md:mb-0 w-1/2 md:w-full' />
        </div>
        <div className='md:w-3/4  px-4 py-8 md:px-20 md:py-10'>
          <h1 className='text-green-500 text-4xl md:text-7xl font-serif'>SPONSORLY</h1>
          <p className='text-white text-xl tracking-widest my-8 md:my-12 font-semibold text-justify '>Influencer marketing is a valuable tool for businesses to reach their target audience on social media platforms. However, finding the right influencers can be time-consuming and inefficient. Advertisers need a website that streamlines the process of finding and collaborating with the right influencers, allowing them to easily reach out to influencers that align with their brand and goals. This would provide influencers with a more efficient way to monetize their social media presence while enhancing the authenticity of sponsored content and driving better results for businesses.</p>
          <button className='mx-auto mt-6 md:mt-8 bg-green-500 px-4 py-2 text-primary font-bold rounded-full'>INFO</button>
        </div>
      </div>



      <div className='m-12  '>
        <div>
        <h1 className='text-green-500 mx-4 my-7 text-6xl font-serif'>HOW TO START ? </h1>
        </div>
        <div className='flex flex-row flex-wrap p-10'>
         <img src="./images/1.png"  />
         <img src="./images/2.png"  />
         <img src="./images/3.png" />
         <img src="./images/4.png"  />
         <img src="./images/5.png"  />
         <img src="./images/6.png"  />
         <img src="./images/7.png"  />

        </div>
        
      </div >




      <div class="flex flex-col md:flex-row">
  <div class="md:w-2/4">
    <h1 class="text-green-500 text-6xl m-14 font-serif">Our Services</h1>
    <p class="text-white text-xl m-14 font-semibold text-justify">
      We build meaningful relationships between brands and creators. This platform provides a space where brands can easily connect with network of active influencers.
      Services
    </p>
    <button class="mx-6 my-4 text-xs border-2 border-green-500 px-4 py-2 text-green-500 font-bold rounded-full hover:bg-black justify-center">Services</button>
  </div>
  <div class="md:w-2/4 flex justify-center">
    <img src="./images/last.png" class="w-4/5 lg:w-3/5" />
  </div>
</div>

    
    
    </>
    
  )
}