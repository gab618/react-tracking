import React, { useState } from 'react';
import TrackingEvents from './components/TrackingEvents';
import TrackingForm from './components/TrackingForm';

function App() {
  const [events, setEvents] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const inputData = Object.fromEntries(formData);

    fetch(`http://localhost:3333/?tracking=${inputData.tracking}`)
      .then((response) => response.json())
      .then((data) => {
        const responseEvents = data.events || [];
        setEvents(responseEvents);
      })
      .catch(console.error);
  };
  return (
    <div className="container">
      <h1>React Tracking</h1>

      <TrackingForm submitHandler={submitHandler} />
      <TrackingEvents track={events} />
    </div>
  );
}

export default App;
