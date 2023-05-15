import React from "react";
import data from "./data.js";
import Tours from "./components/Tours";
import {useState} from 'react'

const App = () => {

  const [tours, setTours] = useState(data);
  function removeToursHandler(id) {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  if (tours.length === 0) {
    return (
      <div className='refresh'>
        <h2>No Tours Left</h2>
        <button className='btn-white' onClick={() => setTours(data)}>Refresh</button>
      </div>
    )
  }

  return (<Tours tours={tours} removeTour={removeToursHandler}></Tours>);
};

export default App;
