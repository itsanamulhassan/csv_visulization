import React, { useState } from 'react';
import {
  FaBars,
  FaPlusSquare,
  FaQrcode,
  FaSave,
  FaShareSquare,
} from 'react-icons/fa';
// import component 👇
import Drawer from 'react-modern-drawer';

//import styles 👇
import 'react-modern-drawer/dist/index.css';
import RightNav from '../RightNav/RightNav';
const LeftNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuItem, setMenuItem] = useState('add-event');

  const toggleDrawer = () => {
    setIsOpen(prevState => !prevState);
  };
  const handleMenuItem = event => {
    setMenuItem(event);
    setIsOpen(prevState => !prevState);
  };
  return (
    <aside className=" relative w-[10%] lg:w-[5%] h-[90vh]">
      <div className="flex flex-col justify-between h-full py-3 items-center rounded-r-2xl bg-[#faf5ee] border-r-4 border-[#d8f3f5]">
        <button
          onClick={toggleDrawer}
          className="text-black text-xl lg:text-2xl"
        >
          <FaBars className="text-[#3fc3d0]" />
        </button>
        <button className="text-black text-xl lg:text-2xl">
          <FaShareSquare className="text-[#3fc3d0]" />
        </button>
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className="!h-full !bg-[#faf5ee]  !absolute !border-l-8 !border-white !bottom-0 !w-[70vw] md:!w-[40vw] lg:!w-[25vw] xl:!w-[20vw] rounded-r-2xl"
      >
        <div className="w-full flex flex-col justify-center py-8">
          <button
            onClick={() => handleMenuItem('add-event')}
            className={`${
              menuItem === 'add-event'
                ? 'bg-white border-[#3fc3d0] text-[#526175]'
                : 'text-[#a5abb5] border-transparent'
            }  w-full py-2 lg:py-4 text-lg lg:text-2xl font-semibold  duration-400 border-r-4 lg:border-r-8  flex items-center justify-start pl-3 lg:pl-5 hover:border-[#3fc3d0] hover:text-[#526175]`}
          >
            <FaPlusSquare
              className={`mr-2 text-xl lg:text-3xl ${
                menuItem === 'add-event' ? 'text-[#3fc3d0]' : 'text-[#a5abb5]'
              }`}
            />{' '}
            Add a Event
          </button>
          <button
            onClick={() => handleMenuItem('another-one')}
            className={`${
              menuItem === 'another-one'
                ? 'bg-white border-[#3fc3d0] text-[#526175]'
                : 'text-[#a5abb5] border-transparent'
            } w-full py-2 lg:py-4 text-lg lg:text-2xl font-semibold  duration-400 border-r-4 lg:border-r-8  flex items-center justify-start pl-3 lg:pl-5 hover:border-[#3fc3d0] hover:text-[#526175]`}
          >
            <FaQrcode
              className={`mr-2 text-xl lg:text-3xl ${
                menuItem === 'another-one' ? 'text-[#3fc3d0]' : 'text-[#a5abb5]'
              }`}
            />
            Another one
          </button>
          <button
            onClick={() => handleMenuItem('something')}
            className={`${
              menuItem === 'something'
                ? 'bg-white border-[#3fc3d0] text-[#526175]'
                : 'text-[#a5abb5] border-transparent'
            }  w-full py-2 lg:py-4 text-lg lg:text-2xl font-semibold  duration-400 border-r-4 lg:border-r-8  flex items-center justify-start pl-3 lg:pl-5 hover:border-[#3fc3d0] hover:text-[#526175]`}
          >
            <FaSave
              className={`mr-2 text-xl lg:text-3xl ${
                menuItem === 'something' ? 'text-[#3fc3d0]' : 'text-[#a5abb5]'
              }`}
            />
            Something
          </button>
        </div>
      </Drawer>
    </aside>
  );
};

export default LeftNav;
