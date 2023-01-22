import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { format } from 'date-fns';

export const StateContext = createContext({});

const EventsContext = ({ children }) => {
  const [eventDetails, setEventDetails] = useState(null);
  const [events, setEvents] = useState([]);
  const [selected, setSelected] = useState(new Date());
  const { data: allEvents = [], isLoading } = useQuery({
    queryKey: ['events'],
    queryFn: async () => {
      const res = await fetch('info.json');
      const data = await res.json();
      setEventDetails(data[0]);
      setEvents(data);
      return data;
    },
  });
  const handleFilter = (filter, value) => {
    if (filter.toLowerCase() === 'location') {
      const eventByLocation = allEvents.filter(
        event => event.Location.toLowerCase() === value.toLowerCase()
      );
      setEvents(eventByLocation);
      setEventDetails(eventByLocation[0]);
    }
    if (filter.toLowerCase() === 'gender') {
      const eventByLocation = allEvents.filter(
        event => event.Gender.toLowerCase() === value.toLowerCase()
      );
      setEvents(eventByLocation);
      setEventDetails(eventByLocation[0]);
    }
    if (filter.toLowerCase() === 'date') {
      console.log(value);
      // setEvents(allEvents);
      // setEventDetails(allEvents[0]);
    }
    if (filter.toLowerCase() === 'all') {
      setEvents(allEvents);
      setEventDetails(allEvents[0]);
    }
  };
  const eventInfo = {
    events,
    isLoading,
    eventDetails,
    setEventDetails,
    handleFilter,
    allEvents,
    selected,
    setSelected,
  };
  return (
    <div>
      <StateContext.Provider value={eventInfo}>
        {children}
      </StateContext.Provider>
    </div>
  );
};

export default EventsContext;
