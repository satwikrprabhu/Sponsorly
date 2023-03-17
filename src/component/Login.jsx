import React from 'react';
import Signup from './Signup';
import {Link} from 'react-router-dom'
const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-primary rounded-md">
        <div className="max-w-7xl flex justify-center mx-auto py-12 px-4 lg:py-16 lg:px-8">
          <div className="lg:flex lg:justify-between">
            <div className="max-w-md">
              <h2 className="text-5xl font-extrabold text-green-500 sm:text-4xl text-center mb-3 md:text-5xl">
                Welcome Back
              </h2>
              <h3 className="text-gray-400 text-center">
                Login to your Sponsorly Account
              </h3>
              <div className="mt-8">
                <form className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-green-500"
                    >
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className=''>
                    <label
                      htmlFor="password"
                      className="block text-sm font-semibold text-green-500"
                    >
                      Password
                    </label>
                    <div className="">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      />
                    </div>
                    <h3 className='text-green-500 font-semibold text-right text-[.85rem] mt-[.3rem]'>Don't have an Account? <Link to='../signup' className='font-bold'>SignUp</Link></h3>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="inline-flex items-center px-5 py-1 border border-transparent text-base font-semibold rounded-full text-black bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                      Login
                    </button>
                  </div>
                </form>
                {/* <hr className='mt-8'/>
                <h2 className='text-white text-lg text-center mt-4'>OR</h2> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
