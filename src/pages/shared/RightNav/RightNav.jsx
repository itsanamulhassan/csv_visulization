import React, { useContext } from 'react';
import { VscLoading } from 'react-icons/vsc';
import { StateContext } from '../../../context/EventsContext';
import EventCard from './EventCard';
import { Fragment } from 'react';
import { Select, Option } from '@material-tailwind/react';
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from '@material-tailwind/react';
import { FaSlidersH } from 'react-icons/fa';

const RightNav = () => {
  const { events, isLoading } = useContext(StateContext);
  const locations = events.map(event => Object.values(event.Location).join(''));

  console.log(new Set(locations));

  if (isLoading) {
    return (
      <div className="w-[30%] bg-[#faf5ee] flex items-center justify-center rounded-l-2xl">
        <VscLoading className="text-6xl animate-spin" />
      </div>
    );
  }
  return (
    <aside className="w-[30%] bg-[#faf5ee] px-3 rounded-l-2xl">
      {events.length > 0 ? (
        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold my-4"> Events</h2>
            <Menu placement="left-start">
              <MenuHandler>
                <Button className="!bg-transparent !shadow-none !p-0">
                  <FaSlidersH className="text-2xl text-[#526175]" />
                </Button>
              </MenuHandler>
              <MenuList className="!p-2 text-xl text-semibold">
                <MenuItem>Locations</MenuItem>
                <MenuItem>Gender</MenuItem>
                <MenuItem>Date</MenuItem>
              </MenuList>
            </Menu>
          </div>
          <div className="space-y-3 overflow-y-scroll h-[85vh]">
            {events.map((event, index) => (
              <EventCard eventItem={event} key={index}></EventCard>
            ))}
          </div>
        </div>
      ) : (
        <div></div>
      )}
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
