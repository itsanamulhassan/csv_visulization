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
      <div className=" w-[95%] mx-auto flex items-center justify-between h-[10vh]">
        <img className="w-48" src={logo} alt="secquraise" />
        <div className="flex gap-x-4">
          <div className="relative">
            <input
              className="text-lg text-[#526175] font-semibold pl-12 py-2 pr-4 rounded-xl focus:outline-1 focus:outline-[#3fc3d0] focus:outline-offset-1 bg-[#f1f0f3]"
              type="text"
              name=""
              id=""
              placeholder="Search"
            />
            <FaSearch className="text-[#526175] absolute left-6 top-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
          <div
            className="text-xl  bg-[#d8f3f5] flex
              items-center justify-center gap-x-2 text-[#526175] font-semibold px-4 py-2 rounded-xl "
          >
            {isLoading ? (
              <VscLoading className="animate-spin" />
            ) : (
              <span
                className="font-bold flex
              items-center justify-center duration-400"
              >
                <SlUserFemale className="mr-1 text-2xl" />
                {events.filter(event => event.Gender === 'Female').length}
              </span>
            )}
          </div>
          <div className="text-xl flex bg-[#fee9f0] items-center  gap-x-2 justify-center text-[#526175] font-semibold px-4 py-2   rounded-xl ">
            {isLoading ? (
              <VscLoading className="animate-spin" />
            ) : (
              <span
                className="font-bold flex
              items-center justify-center duration-400"
              >
                <SlUser className="mr-1 text-2xl" />
                {events.filter(event => event.Gender === 'Male').length}
              </span>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

/**
 * #3fc3d0
 * #a7aab4
 * #526175
 * #f1f0f3
 * #a5abb5
 * #fee9f0
 * #d8f3f5
 * #ffead3
 * #fe8b10
 * #f3f5f7
 * #08071c
 * #faf5ee
 *
 */
