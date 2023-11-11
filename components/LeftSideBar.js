import React from "react";


import { MdHome, MdGroups } from "react-icons/md";
import { BsCart3, BsPeopleFill, BsCalendar2Fill } from "react-icons/bs";
import { RiArrowDownSLine } from "react-icons/ri";
import { AiOutlineDesktop, AiFillClockCircle } from "react-icons/ai";
import Image from "next/image";



const LeftSideBar = ({profile}) => {
  
  return (
    <div className="w-[10rem] hidden sm:block  text-[#7c7d7f] ">
      <div className="flex flex-col  pt-4 sm:pt-12 pl-7">
        <div className="flex items-center font-bold">
  
          <p className="ml-2">{profile.name}</p>
        </div>
        <div className="flex items-center mt-4">
          <div className="w-9 h-9 shrink-0">
            <img
           
              className="rounded-full"
            />
          </div>
          <p className="ml-2 font-bold whitespace-nowrap">
        
          </p>
        </div>

        <div className="border-b my-4"></div>
        <div className="space-y-6">
          <div className="flex items-center">
            <AiOutlineDesktop className="w-8 h-8" />
            <p className="ml-2 font-bold">Watch</p>
          </div>

          <div className="flex items-center">
            <BsPeopleFill className="w-8 h-8" />
            <p className="ml-2 font-bold">Friends</p>
          </div>

          <div className="flex items-center">
            <MdGroups className="w-8 h-8" />
            <p className="ml-2 font-bold">Groups</p>
          </div>

          <div className="flex items-center">
            <BsCart3 className="w-8 h-8" />
            <p className="ml-2 font-bold">Marketplace</p>
          </div>

          <div className="flex items-center">
            <BsCalendar2Fill className="w-8 h-8" />
            <p className="ml-2 font-bold">Events</p>
          </div>
          <div className="flex items-center">
            <AiFillClockCircle className="w-8 h-8" />
            <p className="ml-2 font-bold">Memories</p>
          </div>

          <div className="flex items-center">
            <RiArrowDownSLine className="w-8 h-8" />
            <p className="ml-2 ">See More</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
