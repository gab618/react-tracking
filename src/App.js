import React, { useState } from 'react';
import TrackingEvents from './components/TrackingEvents';

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

      <form onSubmit={submitHandler}>
        <div className="form-group">
          <input type="text" name="tracking" className="form-control" />
        </div>
        <button type="submit" value="track" className="btn btn-primary">
          Track
        </button>
      </form>

      <TrackingEvents track={events} />
    </div>
  );
}

export default App;
