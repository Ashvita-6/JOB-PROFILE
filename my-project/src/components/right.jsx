import React from 'react'
import { LuMail } from "react-icons/lu";
import { FaRocket } from "react-icons/fa6";


const Right = () => {
  return (
    <div className="  ">
      <div className="card">
        <div className="flex flex-wrap items-center gap-1">
          <LuMail />
          <h3 className="font-bold text-lg">Email for more jobs</h3>
        </div>
        <p className="text-gray-600 p-1">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci unde earum et molestias asperiores officia consequuntur!
        </p>
        <div className="flex flex-col gap-4 my-2">
          <input
            type="email"
            id="email"
            name="email"
            className="bg-[#FAFAFA] h-10 items-center p-2"
            placeholder="name@mail.com"
          />
          <input
            type="submit"
            value={"Subscribe"}
            className="bg-blue-600 text-white h-10 hover:bg-[#FAFAFA] hover:text-black cursor-pointer"
          >
          </input>
        </div>
      </div>
      <div className="card">
        <div className="flex flex-wrap items-center gap-1">
          <FaRocket />
          <h3 className="font-bold text-lg">Get notified faster</h3>
        </div>
        <p className="text-gray-600 p-1">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci unde earum et molestias asperiores officia consequuntur!
        </p>
        <div className="flex flex-col gap-4 my-2">
          <input type='submit' value={"Upload your resume"}  className="bg-blue-600 text-white h-10 hover:bg-[#FAFAFA] hover:text-black cursor-pointer">
          </input>
        </div>
      </div>
    </div>
  );
};


export default Right
