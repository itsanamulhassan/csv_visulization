import React from 'react';
import { useContext } from 'react';
import { VscLoading } from 'react-icons/vsc';
import { StateContext } from '../../context/EventsContext';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useState } from 'react';

const Home = () => {
  const { eventDetails, isLoading } = useContext(StateContext);
  // console.log(eventDetails);
  if (isLoading) {
    return (
      <div className="w-[65%] flex items-center justify-center">Loading...</div>
    );
  }

  return (
    <section className="w-[65%] text-[#526175]">
      <div className="flex mt-8">
        <div className="w-1/2 py-8 px-6 font-semibold mt-8">
          <p className="text-2xl font-bold">
            {eventDetails.ID ? eventDetails.ID : 'ID not found'}
          </p>
          <p className="text-xl">Person Detected</p>
          <ul className="my-8 text-lg">
            <li>
              Name: {eventDetails.Name ? eventDetails.Name : 'Name not found'}
            </li>
            <li>
              Location:{' '}
              {eventDetails.Location
                ? eventDetails.Location
                : 'Location not found'}
            </li>
            <li>
              Date: {eventDetails.Date ? eventDetails.Date : 'Date not found'}
            </li>
            <li>
              Time: {eventDetails.Time ? eventDetails.Time : 'Time not found'}
            </li>
          </ul>
          <p className="text-2xl">Description</p>
          <p className="text-lg">
            {eventDetails.Name ? eventDetails.Name : 'Name not found'} detected
            at{' '}
            {eventDetails.Location
              ? eventDetails.Location
              : 'Location not found'}{' '}
            on{' '}
            {eventDetails.Date ? (
              <span>
                {eventDetails.Date.split('-')[0]}
                {+eventDetails.Date.split('-')[0] === 1
                  ? 'st'
                  : +eventDetails.Date.split('-')[0] === 2
                  ? 'nd'
                  : +eventDetails.Date.split('-')[0] === 3
                  ? 'rd'
                  : 'th'}{' '}
                {eventDetails.Date.split('-')[1].toLowerCase() === 'jan'
                  ? 'January'
                  : eventDetails.Date.split('-')[1].toLowerCase() === 'feb'
                  ? 'February'
                  : eventDetails.Date.split('-')[1].toLowerCase() === 'mar'
                  ? 'March'
                  : eventDetails.Date.split('-')[1].toLowerCase() === 'apr'
                  ? 'April'
                  : eventDetails.Date.split('-')[1].toLowerCase() === 'may'
                  ? 'May'
                  : eventDetails.Date.split('-')[1].toLowerCase() === 'jun'
                  ? 'Jun'
                  : eventDetails.Date.split('-')[1].toLowerCase() === 'jul'
                  ? 'July'
                  : eventDetails.Date.split('-')[1].toLowerCase() === 'aug'
                  ? 'August'
                  : eventDetails.Date.split('-')[1].toLowerCase() === 'seb'
                  ? 'September'
                  : eventDetails.Date.split('-')[1].toLowerCase() === 'oct'
                  ? 'October'
                  : eventDetails.Date.split('-')[1].toLowerCase() === 'nov'
                  ? 'November'
                  : 'December'}
                , 20{eventDetails.Date.split('-')[2]}.
              </span>
            ) : (
              'Date not found'
            )}
          </p>
        </div>
        <div className="w-1/2  p-4">
          <p className="text-2xl font-bold my-2">
            {eventDetails.Gender ? eventDetails.Gender : 'Gender not found'}
          </p>
          <LazyLoadImage
            alt={eventDetails.Name ? eventDetails.Name : 'Name not found'}
            src={eventDetails.Image}
            className="w-full rounded-xl border-4 border-[#3fc3d0] border-opacity-30"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;

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
