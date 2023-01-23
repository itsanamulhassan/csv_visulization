import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { db } from '../firebase/firebase.config';
import { addDoc, collection, getDocs } from 'firebase/firestore';

export const StateContext = createContext({});
const EventsContext = ({ children }) => {
  const eventsCollectionRef = collection(db, 'eventsCollection');
  const [eventDetails, setEventDetails] = useState(null);
  const [events, setEvents] = useState([]);
  const [selected, setSelected] = useState(new Date());
  const { data: allEvents = [], isLoading } = useQuery({
    queryKey: ['events'],
    queryFn: async () => {
      const res = await getDocs(eventsCollectionRef);
      const data = res.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setEventDetails(data[0]);
      setEvents(data);
      return data;
    },
  });

  const handleAddEvent = async event => {
    await addDoc(eventsCollectionRef, {
      ID: event.ID,
      Location: event.Location,
      Gender: event.Gender,
      Name: event.Name,
      Date: event.Date,
      Time: event.Time,
      Image: event.Image,
    });
  };

  const handleFilter = (filter, value) => {
    if (filter.toLowerCase() === 'location') {
      const eventByLocation = allEvents.filter(
        event => event.Location.toLowerCase() === value.toLowerCase()
      );
      setEvents(eventByLocation);
      setEventDetails(eventByLocation[0]);
    }
    if (filter.toLowerCase() === 'gender') {
      const eventByGender = allEvents.filter(
        event => event.Gender.toLowerCase() === value.toLowerCase()
      );
      setEvents(eventByGender);
      setEventDetails(eventByGender[0]);
    }
    if (filter.toLowerCase() === 'date') {
      const date = `${+value.toString().split(' ')[2]}-${value
        .toString()
        .split(' ')[1]
        .toLowerCase()}-${value
        .toString()
        .split(' ')[3]
        .toLowerCase()
        .split('')
        .slice(-2)
        .join('')
        .toString()}`;
      const eventByDate = allEvents.filter(
        event => event.Date.toLowerCase() === date
      );
      setEvents(eventByDate);
      setEventDetails(eventByDate[0]);
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
    handleAddEvent,
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
