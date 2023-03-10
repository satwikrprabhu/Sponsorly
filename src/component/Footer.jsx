import React from 'react'

export default function Footer() {
  return (
    

    <div className='flex flex-col md:flex-row md:justify-between md:items-center mt-10'>
  <div className='basis-1/3 text-white text-xl mx-10 justify-start p-10'>
    <h1>Contact Us</h1>
    <p>satwik prabhu</p>
    <p>Email:satwikprabhu@gmail.com</p>
    <p>98786567434</p>
  </div>
  <div className='basis-1/3 text-white text-xl justify-center p-10'>
    <p>Get In Touch</p>
    <img src="./images/sp.png" alt="Get In Touch" className="mx-auto" />
  </div>
  <div className='basis-1/3 text-white justify-end p-10 mx-10'>
    <p className='pb-4 pl-4'>Follow Us</p>
    <div className='flex space-x-4'>
      <img src="./images/fb.png" alt="Facebook" className="w-6 h-6" />
      <img src="./images/insta.png" alt="Instagram" className="w-6 h-6" />
      <img src="./images/twit.png" alt="Twitter" className="w-6 h-6" />
    </div>
  </div>
</div>


  )
}
