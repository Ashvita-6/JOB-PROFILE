import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const Banner = ({query,handleInputChange}) => {
    
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-20 py-14">
      <h1 className="text-5xl mb-3 text-black font-bold">
        Find your <span className="text-blue-600">new job</span> today
      </h1>
      <p className="text-lg text-black/70 mb-8">
        Thousands of jobs in various sectors are waiting for you.
      </p>

      <form>
        <div className="flex md:flex-row flex-col md:gap-0 gap-2">
          <div className="relative flex md:rounded-s-md rounded shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-blue-500 md:w-1/2 w-full">
            <FaSearch className="absolute inset-y-0 left-0 mt-2.5 ml-2 text-gray-400" />
            <input
              type="text"
              name="title"
              id="title"
              placeholder="What position are you looking for ?"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-7 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              onChange={handleInputChange}
              value={query}
            />
          </div>

          <div className="relative flex md:rounded-s-md rounded shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-blue-500 md:w-1/3 w-full">
            <IoLocationOutline  className="absolute inset-y-0 left-0 mt-2.5 ml-2 text-gray-400" />
            <input
              type="text"
              name="title"
              id="title"
              placeholder="What location are you looking for ?"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-7 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
          </div>
          <button type="submit" className="flex md:rounded-s-none rounded md:w-40 md:h-auto h-10 bg-blue-600 justify-center items-center text-white">Search</button>
        </div>
      </form>
    </div>
  );
};

export default Banner;
