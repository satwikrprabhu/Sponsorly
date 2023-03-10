import React from 'react'

export default function Footer() {
  return (
    <div className='flex mt-10'>
        
      <div className='basis-1/3 text-white text-xl mx-10 justify-start p-10'>
        <h1>Contact Us</h1>
        <p>satwik prabhy</p>
        <p>Email:satwikprabhu@gmail.com</p>
        <p>98786567434</p>
      </div>
      <div className='basis-1/3 text-white text-xl justify-center p-10'>
        <p>Get In Touch</p>
        <img src="./images/sp.png"  />
      </div>
      
      <div className='basis-1/3 text-white justify-end p-10 mx-10'>
        <p className='pb-4 pl-4'>  Follow Us</p>
        <div className='flex space-x-4'  >
        <img src="./images/fb.png"  />
        <img src="./images/insta.png" />
        <img src="./images/twit.png"  />
        </div>
      </div>
    </div>
  )
}
