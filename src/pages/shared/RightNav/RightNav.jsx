import React, { useContext, useState } from 'react';
import { VscLoading } from 'react-icons/vsc';
import { StateContext } from '../../../context/EventsContext';
import EventCard from './EventCard';
import Drawer from 'react-modern-drawer';

import {
  MdLocationOn,
  MdSplitscreen,
  MdOutlineDateRange,
  MdOutlinePeopleOutline,
} from 'react-icons/md';
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from '@material-tailwind/react';
import { FaAngleDoubleLeft, FaSadTear, FaSlidersH } from 'react-icons/fa';

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const RightNav = () => {
  const { events, isLoading, handleFilter, allEvents } =
    useContext(StateContext);

  const locations = allEvents.map(event =>
    Object.values(event.Location).join('')
  );
  const finalLocations = Array.from(new Set(locations));

  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen(prevState => !prevState);
  };

  const RightNavigation = (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-[#526175] my-4"> Events</h2>
        <Menu placement="bottom-end">
          <MenuHandler>
            <Button className="!bg-transparent !shadow-none !p-0">
              <FaSlidersH className="text-2xl text-[#526175]" />
            </Button>
          </MenuHandler>
          <MenuList
            className="!border-2 !border-[#d8f3f5] !w-24 !p-1 md:!p-3"
            children={[
              <Menu key={234343} placement="left-start">
                <MenuHandler
                  className=" !block !bg-transparent !w-full !text-[#526175] !text-sm md:!text-xl !normal-case  !shadow-none !p-0
              !px-3 !m-0 !py-1 hover:!bg-[#d8f3f5] my-2"
                >
                  <Button>
                    <span className="!flex !items-center !justify-start !gap-x-2">
                      <MdLocationOn /> Locations
                    </span>
                  </Button>
                </MenuHandler>
                <MenuList
                  className="!border-2 !border-[#d8f3f5] !w-12 !p-1"
                  children={finalLocations.map((location, index) => (
                    <MenuItem
                      className="!block !bg-transparent  !text-[#526175] !text-sm md:!text-xl  !normal-case !shadow-none !p-0
                  !px-1 !m-0 md:!px-3 !py-1 hover:!bg-[#d8f3f5] my-2 !font-semibold"
                      onClick={() => handleFilter('location', location)}
                      key={index}
                    >
                      {location}
                    </MenuItem>
                  ))}
                ></MenuList>
              </Menu>,
              <Menu key={23433} placement="left-start">
                <MenuHandler
                  className="!block !bg-transparent !w-full !text-[#526175] !text-sm md:!text-xl !normal-case  !shadow-none !p-0
              !px-3 !m-0 !py-1 hover:!bg-[#d8f3f5] my-2"
                >
                  <Button>
                    <span className="!flex !items-center !justify-start !gap-x-2">
                      <MdSplitscreen /> Gender
                    </span>
                  </Button>
                </MenuHandler>
                <MenuList className="!border-2 !border-[#d8f3f5] !w-12 !p-1 md:!p-3">
                  <MenuItem
                    className="!block !bg-transparent !w-full !text-[#526175] !text-sm md:!text-xl !normal-case  !shadow-none !p-0
                  !px-3 !m-0 !py-1 hover:!bg-[#d8f3f5] my-2 !font-semibold"
                    onClick={() => handleFilter('gender', 'Female')}
                  >
                    Female
                  </MenuItem>
                  <MenuItem
                    className="!block !bg-transparent !w-full !text-[#526175] !text-sm md:!text-xl only-of-type:console.log('object :>> ', object);!normal-case  !shadow-none !p-0
                  !px-3 !m-0 !py-1 hover:!bg-[#d8f3f5] my-2 !font-semibold"
                    onClick={() => handleFilter('gender', 'Male')}
                  >
                    Male
                  </MenuItem>
                </MenuList>
              </Menu>,

              <Menu key={2343} placement="left-start">
                <MenuHandler
                  className=" !block !bg-transparent !w-full !text-[#526175] !text-sm md:!text-xl !normal-case  !shadow-none !p-0
              !px-3 !m-0 !py-1 hover:!bg-[#d8f3f5] my-2"
                >
                  <Button>
                    <span className="!flex !items-center !justify-start !gap-x-2">
                      <MdOutlineDateRange /> Date
                    </span>
                  </Button>
                </MenuHandler>
                <MenuList
                  className="!border-2 !border-[#d8f3f5] !text-xs md:!text-lg md:!overflow-hidden"
                  children={[
                    <DayPicker
                      className="!w-12 md:!w-full "
                      key={111111111100}
                      mode="single"
                      selected={new Date()}
                      onSelect={data => {
                        if (data) {
                          handleFilter('date', data);
                        }
                      }}
                    />,
                  ]}
                ></MenuList>
              </Menu>,
              <MenuItem
                key={234333}
                className="!block !bg-transparent !w-full !text-[#526175] !text-sm md:!text-xl !normal-case  !shadow-none !p-0
            !px-3 !m-0 !py-1 hover:!bg-[#d8f3f5] my-2 !font-semibold"
                onClick={() => handleFilter('all', 'events')}
              >
                <span className="!flex !items-center !justify-start !gap-x-2">
                  <MdOutlinePeopleOutline /> All Event
                </span>
              </MenuItem>,
            ]}
          ></MenuList>
        </Menu>
      </div>
      <div>
        {events.length > 0 ? (
          <div className="space-y-2 overflow-y-scroll h-[80vh] pb-8 lg:pb-3">
            {events.map((event, index) => (
              <EventCard eventItem={event} key={index}></EventCard>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center w-full text-[#fe8b10] flex-col">
            <FaSadTear className="text-6xl mt-12" />
            <h2 className="text-2xl font-semibold">Event not found</h2>
          </div>
        )}
      </div>
    </div>
  );

  if (isLoading) {
    return (
      <div className="hidden lg:flex w-[30%] bg-[#faf5ee]  items-center justify-center rounded-l-2xl">
        <VscLoading className="text-6xl text-[#3fc3d0] animate-spin" />
      </div>
    );
  }
  return (
    <>
      <aside className="hidden lg:block w-[30%] bg-[#faf5ee] px-3 rounded-l-2xl border-l-4 border-[#d8f3f5]">
        {RightNavigation}
      </aside>

      <div className="block lg:hidden relative h-[90vh]">
        <div className="flex flex-col justify-between h-full py-3 items-center">
          <button
            onClick={toggleDrawer}
            className="text-black text-xl lg:text-2xl absolute"
          >
            <FaAngleDoubleLeft className="text-[#3fc3d0] text-3xl animate-ping" />
          </button>
          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="right"
            className="!h-full !bg-[#faf5ee] !absolute  !bottom-0 !w-[85vw] md:!w-[70vw] rounded-l-2xl"
          >
            <div className="p-2">{RightNavigation}</div>
          </Drawer>
        </div>
      </div>
    </>
  );
};

export default RightNav;
