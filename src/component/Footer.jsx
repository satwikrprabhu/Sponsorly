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
            <li className='py-2 text-sm hover:text-green-500 cursor-pointer'><Link to='https://influencermarketinghub.com/'target="blank">Resources</Link></li>
            <li className='py-2 text-sm hover:text-green-500 cursor-pointer'><Link to='https://klear.com/'target="blank">Marketing</Link></li>
            <li className='py-2 text-sm hover:text-green-500 cursor-pointer'><Link to='https://later.com/blog/'target="blank">Blogs</Link></li>
            <li className='py-2 text-sm hover:text-green-500 cursor-pointer'><Link to='https://influencermarketingassociation.org/'target="blank">Industry</Link></li>
          </ul>
        </div>

        <div>
          <h6 className='font-bold text-gray-300 '>Company</h6>
          <ul>
            <li className='py-2 text-sm hover:text-green-500 cursor-pointer'><Link to='https://www.upfluence.com/pricing/'target="blank">Pricing</Link></li>
            <li className='py-2 text-sm hover:text-green-500 cursor-pointer'><Link to='https://developer.twitter.com/en/docs'target="blank">Documentation</Link></li>
             <li className='py-2 text-sm hover:text-green-500 cursor-pointer'><Link to='https://blog.hubspot.com/marketing/'target="blank">Guides</Link></li>
          <li className='py-2 text-sm hover:text-green-500 cursor-pointer'><Link to='https://www.adweek.com/'target="blank">Insights</Link></li>
          </ul>
        </div>

        <div>
          <h6 className='text-gray-300 font-bold'>Research</h6>
          <ul>
           <li className='py-2 text-sm hover:text-green-500 cursor-pointer'><Link to='https://www.socialmediaexaminer.com/'target="blank">Info</Link></li>
           <li className='py-2 text-sm hover:text-green-500 cursor-pointer'><Link to='https://www.kickstarter.com/'target="blank">Creation</Link></li>
            <li className='py-2 text-sm hover:text-green-500 cursor-pointer'><Link to='https://socialblade.com/'target="blank">Innovate</Link></li>
            <li className='py-2 text-sm hover:text-green-500 cursor-pointer'><Link to='https://adage.com/'target="blank">Ideas</Link></li>


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
          <Link to='https://www.instagram.com/finiteloop_club_nmamit/'><FaInstagram size={30} className=' hover:text-green-500 cursor-pointer'/></Link>
          <Link to='https://www.facebook.com/FiniteLoopClub.Nmamit/'><FaFacebook size={30} className=' hover:text-green-500 cursor-pointer'/></Link>
          <Link to='https://www.linkedin.com/showcase/finite-loop-club'><FaLinkedin size={30} className=' hover:text-green-500 cursor-pointer'/></Link>
          <Link to='https://github.com/satwikrprabhu'><FaGithub size={30} className=' hover:text-green-500 cursor-pointer'/></Link>
        </div>
        
        </div>
    
    </>

  )
}
