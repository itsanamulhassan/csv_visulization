import React from 'react';
import { FaSearch } from 'react-icons/fa';
import logo from '../../../assets/image/logo.png';
import { SlUserFemale, SlUser } from 'react-icons/sl';
import { useContext } from 'react';
import { StateContext } from '../../../context/EventsContext';
import { VscLoading } from 'react-icons/vsc';

const Navbar = () => {
  const { events, isLoading } = useContext(StateContext);
  return (
    <nav className="bg-[#3fc3d0] text-white w-screen">
      <div className="w-[97%] mx-auto flex items-center justify-between h-[10vh]">
        <img className="w-24 md:w-44 lg:w-48" src={logo} alt="secquraise" />
        <div className="flex gap-x-[2px] md:gap-x-2 lg:gap-x-4 items-center">
          <div className="relative">
            <input
              className=" w-36 md:w-full text-xs md:text-lg text-[#526175] font-semibold pl-6 md:pl-12 py-[6px] md:py-2 pr-2 md:pr-4  rounded-md md:rounded-xl focus:outline-1 focus:outline-[#3fc3d0] focus:outline-offset-1 bg-[#f1f0f3]"
              type="text"
              name=""
              id=""
              placeholder="Search"
            />
            <FaSearch className="text-[#526175] text-xs md:text-lg absolute left-3 md:left-6 top-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
          <div
            className="text-sm md:text-xl  bg-[#d8f3f5] flex
              items-center justify-center gap-x-2 text-[#526175] font-semibold px-1 md:px-4 py-1 md:py-2 rounded-md md:rounded-xl "
          >
            {isLoading ? (
              <VscLoading className="animate-spin" />
            ) : (
              <span
                className="font-semibold md:font-bold flex
              items-center justify-center duration-400"
              >
                <SlUserFemale className="mr-1 text-md  md:text-2xl" />
                {events.filter(event => event.Gender === 'Female').length > 0
                  ? events.filter(event => event.Gender === 'Female').length
                  : '00'}
              </span>
            )}
          </div>
          <div
            className="text-sm md:text-xl  bg-[#fee9f0] flex
              items-center justify-center gap-x-2 text-[#526175] font-semibold px-1 md:px-4 py-1 md:py-2 rounded-md md:rounded-xl "
          >
            {isLoading ? (
              <VscLoading className="animate-spin" />
            ) : (
              <span
                className="font-semibold md:font-bold flex
              items-center justify-center duration-400"
              >
                <SlUser className="mr-1 text-md  md:text-2xl" />
                {events.filter(event => event.Gender === 'Male').length > 0
                  ? events.filter(event => event.Gender === 'Male').length
                  : '00'}
              </span>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
