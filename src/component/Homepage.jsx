import React from 'react'

export default function Homepage() {
  return (<>
<div className='flex flex-row'>
    <div className='m-14'>

      <p className=' tracking-widest text-white mx-6 my-12 text-2xl  '>NOW ADVERTISE YOUR PRODUCTS ON SOCIAL MEDIA WITH SPONSORLY</p>
      <h1 className='text-green-500 mx-6 my-6  text-6xl'>Ready To Connect?</h1>
      <p className='text-white text-2xl mx-6 my-6 tracking-widest'>Boost your social media career with us <br />

        Unleash the influencer in you <br />

        Make the best of your content</p>
      <button className=' mx-6 my-4 text-xs border-2 border-green-500 px-4 py-2 text-green-500 font-bold rounded-full hover:bg-black justify-center'>Lets Connect</button>
    </div>
    <div className='basis-full'>

      
      <img src="./images/gra.png" class="" />

    </div>
</div>

  <div className='flex'>
     <div> <img src="./images/Frame.png" className='mt-48 ml-14 basis-1/4  ' /></div>
      <div className='text-box basis-3/4  mx-4 my-10  px-20 py-10'>
        <h1 className='text-green-500 text-7xl'>SPONSORLY</h1>
        <p className='text-white text-xl tracking-widest m-8'>The rise of influencer marketing has created a new avenue for businesses to reach their target
          audience through social media platforms. However, finding the right influencers to work with can be a challenging task
          for advertisers. The process of manually searching for potential influencers, negotiating collaborations, and tracking
          results can be time-consuming and inefficient.

          Additionally, many influencers are inundated with requests from advertisers, which can make it difficult for businesses to
          stand out and build meaningful relationships with them. This can result in a lack of trust between advertisers and
          influencers, leading to a lack of authenticity in their sponsored content.

          To address these challenges, there is a need for a website that connects advertisers to influencers, streamlining
          the process of finding and collaborating with the right influencers. Such a platform would enable advertisers to easily
          find and reach out to influencers that align with their brand and goals, while also providing influencers with a more efficient
          way to monetize their social media presence. By facilitating more effective collaborations
          between advertisers and influencers, the platform would help to enhance the authenticity of sponsored
          content and drive better results for businesses.</p>
        <button className=' m-7  bg-green-500 px-4 py-2 text-primary font-bold rounded-full'>INFO</button>
      </div>
      </div>
      <div className='m-12  '>
        <div>
      
        <h1 className='text-green-500 mx-4 my-7 text-6xl'>HOW TO START ? </h1>
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
      <div className='flex'>
        <div className='basis-2/4
        '>
          <h1 className='text-green-500 text-6xl m-14
           '>Our Services</h1>
           <p className='text-white text-xl m-14  '>We build meaningful relationships between brands and creators. 
This platform provides a space where brands can easily connect with network 
of active influencers.
Services
</p>
<button className='mx-6 my-4 text-xs border-2 border-green-500 px-4 py-2 text-green-500 font-bold rounded-full hover:bg-black justify-center '>Services</button>
        </div>
        <div className='basis-2/4
        pl-28'>
          <img src="./images/last.png"  />
        </div>
      </div>
    
    
    </>
    
  )
}
