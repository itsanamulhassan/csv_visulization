import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { format } from 'date-fns';
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
      const data = await getDocs(eventsCollectionRef);
      setEventDetails(data.docs.map(doc => ({ ...doc.data(), id: doc.id }))[0]);
      setEvents(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
      return data.docs.map(doc => ({ ...doc.data(), id: doc.id })).sort();
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
      const eventByLocation = allEvents.filter(
        event => event.Gender.toLowerCase() === value.toLowerCase()
      );
      setEvents(eventByLocation);
      setEventDetails(eventByLocation[0]);
    }
    if (filter.toLowerCase() === 'date') {
      const month = value.toString().split(' ')[1].toLowerCase();
      const date = +value.toString().split(' ')[2];
      console.log(+value.toString().split(' ')[2]);
      console.log(month, date);
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
