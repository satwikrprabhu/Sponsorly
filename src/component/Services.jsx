import React from 'react'

const Services = () => {
  return (
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
  )
}

export default Services