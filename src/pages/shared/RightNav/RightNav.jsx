import React, { useContext } from 'react';
import { VscLoading } from 'react-icons/vsc';
import { StateContext } from '../../../context/EventsContext';
import EventCard from './EventCard';

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
import { FaSadTear, FaSlidersH } from 'react-icons/fa';

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const RightNav = () => {
  const { events, isLoading, handleFilter, allEvents } =
    useContext(StateContext);

  const locations = allEvents.map(event =>
    Object.values(event.Location).join('')
  );
  const finalLocations = Array.from(new Set(locations));

  // console.log(finalLocations);

  if (isLoading) {
    return (
      <div className="w-[30%] bg-[#faf5ee] flex items-center justify-center rounded-l-2xl">
        <VscLoading className="text-6xl animate-spin" />
      </div>
    );
  }
  return (
    <aside className="w-[30%] bg-[#faf5ee] px-3 rounded-l-2xl">
      <div>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold my-4"> Events</h2>
          <Menu placement="left-start">
            <MenuHandler>
              <Button className="!bg-transparent !shadow-none !p-0">
                <FaSlidersH className="text-2xl text-[#526175]" />
              </Button>
            </MenuHandler>
            <MenuList
              children={[
                <Menu key={234343} placement="left-start">
                  <MenuHandler
                    className=" !block !bg-transparent !w-full !text-[#526175] !text-xl !normal-case  !shadow-none !p-0
                    !px-3 !py-1 hover:!bg-[#d8f3f5] my-2"
                  >
                    <Button>
                      <span className="!flex !items-center !justify-start !gap-x-2">
                        <MdLocationOn /> Locations
                      </span>
                    </Button>
                  </MenuHandler>
                  <MenuList
                    children={finalLocations.map((location, index) => (
                      <MenuItem
                        className="!block !bg-transparent !w-full !text-[#526175] !text-xl !normal-case  !shadow-none !p-0
                        !px-3 !py-1 hover:!bg-[#d8f3f5] my-2 !font-semibold"
                        onClick={() => handleFilter('location', location)}
                        key={index}
                      >
                        {location}
                      </MenuItem>
                    ))}
                    className="!p-2 text-xl text-semibold"
                  ></MenuList>
                </Menu>,
                <Menu key={23433} placement="left-start">
                  <MenuHandler
                    className="!block !bg-transparent !w-full !text-[#526175] !text-xl !normal-case  !shadow-none !p-0
                    !px-3 !py-1 hover:!bg-[#d8f3f5] my-2"
                  >
                    <Button>
                      <span className="!flex !items-center !justify-start !gap-x-2">
                        <MdSplitscreen /> Gender
                      </span>
                    </Button>
                  </MenuHandler>
                  <MenuList className="!p-2 text-xl text-semibold">
                    <MenuItem
                      className="!block !bg-transparent !w-full !text-[#526175] !text-xl !normal-case  !shadow-none !p-0
                        !px-3 !py-1 hover:!bg-[#d8f3f5] my-2 !font-semibold"
                      onClick={() => handleFilter('gender', 'Female')}
                    >
                      Female
                    </MenuItem>
                    <MenuItem
                      className="!block !bg-transparent !w-full !text-[#526175] !text-xl !normal-case  !shadow-none !p-0
                        !px-3 !py-1 hover:!bg-[#d8f3f5] my-2 !font-semibold"
                      onClick={() => handleFilter('gender', 'Male')}
                    >
                      Male
                    </MenuItem>
                  </MenuList>
                </Menu>,

                <Menu key={2343} placement="left-start">
                  <MenuHandler
                    className=" !block !bg-transparent !w-full !text-[#526175] !text-xl !normal-case  !shadow-none !p-0
                    !px-3 !py-1 hover:!bg-[#d8f3f5] my-2"
                  >
                    <Button>
                      <span className="!flex !items-center !justify-start !gap-x-2">
                        <MdOutlineDateRange /> Date
                      </span>
                    </Button>
                  </MenuHandler>
                  <MenuList
                    children={[
                      <DayPicker
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
                  className="!block !bg-transparent !w-full !text-[#526175] !text-xl !normal-case  !shadow-none !p-0
                  !px-3 !py-1 hover:!bg-[#d8f3f5] my-2 !font-semibold"
                  onClick={() => handleFilter('all', 'events')}
                >
                  <span className="!flex !items-center !justify-start !gap-x-2">
                    <MdOutlinePeopleOutline /> All Event
                  </span>
                </MenuItem>,
              ]}
              className="!p-2 text-xl text-semibold"
            ></MenuList>
          </Menu>
        </div>
        <div>
          {events.length > 0 ? (
            <div className="space-y-3 overflow-y-scroll h-[85vh]">
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
    </aside>
  );
};

export default RightNav;

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

{
  /* <MenuList
children={finalLocations.map((location, index) => (
  <MenuItem onClick={() => handleFilter(location)} key={index}>
    {location}
  </MenuItem>
))}
className="!p-2 text-xl text-semibold"
></MenuList> */
}
