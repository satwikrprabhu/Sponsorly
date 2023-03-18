import React from 'react';
import {Link} from 'react-router-dom'
function Search() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-primary text-center">
      <h1 className="text-5xl md:text-7xl font-bold mt-10 text-green-500 md:text-left">Welcome to Sponsorly</h1>
      <p className="text-2xl md:text-4xl mt-6 text-gray-400 md:text-left">Are you an influencer or advertiser?</p>
      <div className="flex flex-col md:flex-row justify-center md:justify-center w-full max-w-xl mt-6">
        <button className="py-2 px-4 sm:py-3 sm:px-6 bg-green-500 hover:bg-green-700 text-black font-bold rounded-full mt-4 md:mt-0 md:mr-4 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
         <Link to='/inf'>Influencer</Link>
        </button>
        <button className="py-2 px-4 sm:py-3 sm:px-6 bg-green-500 hover:bg-green-700 text-black
         font-bold rounded-full mt-4 md:mt-0 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
          <Link to='/adv'>Advertiser</Link>
        </button>
      </div>
    </div>
  );
}

export default Search;