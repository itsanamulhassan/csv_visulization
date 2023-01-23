import React from 'react';
import { useContext } from 'react';
import { StateContext } from '../../../context/EventsContext';

const EventCard = ({ eventItem }) => {
  const { setEventDetails, eventDetails } = useContext(StateContext);
  const { ID, Location, Date, Time, id } = eventItem;
  // console.log(eventItem);
  return (
    <div
      onClick={() => setEventDetails(eventItem)}
      className={`${
        eventDetails.id === id ? 'bg-[#fee9f0]' : ''
      }duration-300 hover:bg-[#fee9f0] hover:cursor-pointer rounded-xl text-[#526175] px-3 py-4 font-semibold mx-2 bg-[#d8f3f5]`}
    >
      <div className="flex items-center justify-between">
        <div className="flex text-xl ">
          <p>{ID || 'Id not found'}</p>
          <span>: </span>
          <address className="not-italic ml-2">
            {Location || 'Location not found'}
          </address>
        </div>
        <div className="flex text-md gap-x-2">
          <p>{Date || 'Date not Found'}</p>
          <p>{Time || 'Time not Found'}</p>
        </div>
      </div>
      <p className="text-xl mt-2">Person Detected</p>
    </div>
  );
};

export default EventCard;

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
