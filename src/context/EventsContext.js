import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const StateContext = createContext({});

const EventsContext = ({ children }) => {
  const [eventDetails, setEventDetails] = useState(null);
  const { data: events = [], isLoading } = useQuery({
    queryKey: ['events'],
    queryFn: async () => {
      const res = await fetch('info.json');
      const data = await res.json();
      setEventDetails(data[0]);
      return data;
    },
  });
  const eventInfo = {
    events,
    isLoading,
    eventDetails,
    setEventDetails,
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
