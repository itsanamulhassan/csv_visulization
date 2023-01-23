import React from 'react';
import { useContext } from 'react';
import { VscLoading } from 'react-icons/vsc';
import { StateContext } from '../../context/EventsContext';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useState } from 'react';
import { FaSadTear } from 'react-icons/fa';

const Home = () => {
  const { eventDetails, isLoading } = useContext(StateContext);
  // console.log(eventDetails);
  if (isLoading) {
    return (
      <div className="w-[90%] lg:w-[65%] flex items-center justify-center">
        <VscLoading className="text-6xl text-[#3fc3d0] animate-spin" />
      </div>
    );
  }

  return (
    <section className="w-[90%] lg:w-[65%] text-[#526175]">
      {eventDetails ? (
        <div className="flex mt-8  flex-col-reverse lg:flex-row h-[90vh]  lg:h-full overflow-y-scroll lg:overflow-y-hidden ">
          <div className="w-full lg:w-1/2 py-8 px-6 font-semibold my-8">
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
              {eventDetails.Name ? eventDetails.Name : 'Name not found'}{' '}
              detected at{' '}
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
          <div className="w-full lg:w-1/2  p-4">
            <p className="text-2xl font-bold my-2">
              {eventDetails.Gender ? eventDetails.Gender : 'Gender not found'}
            </p>
            <LazyLoadImage
              alt={eventDetails.Name ? eventDetails.Name : 'Name not found'}
              src={eventDetails.Image}
              className="w-full lg:w-[80%] rounded-xl border-4 border-[#3fc3d0] border-opacity-30"
            />
          </div>
        </div>
      ) : (
        <div className="flex w-full h-full items-center justify-center text-[#fe8b10] flex-col">
          <FaSadTear className="text-6xl" />
          <h2 className="text-2xl font-semibold">Event details not found</h2>
        </div>
      )}
    </section>
  );
};

export default Home;
