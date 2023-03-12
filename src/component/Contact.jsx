import React from 'react';

function Contactpage()  {
  return (
    <div className="bg-primary">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-green-500 sm:text-4xl">
              Get in touch
            </h2>
            <div className="mt-8 sm:max-w-lg">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-green-500" aria-setsize={6}>
                    Full name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="name"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-green-500">
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
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-green-500">
                    Message
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    ></textarea>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center px-6 py-1 border border-transparent text-base font-semibold rounded-full shadow-sm text-black bg-green-1000 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://i.postimg.cc/yYXv6V3p/DALL-E-2023-03-04-12-14-46-Create-an-image-of-a-group-of-influencers-using-social-media-to-promote.png" alt="Contact us" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactpage;
