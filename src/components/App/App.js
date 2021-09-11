import React, { useState } from 'react'
import ApiCalls from './Utils/ApiCalls.js'
import './App.css';


function App() {
  const [history, setHistory] = useState([])
  const [rockets, setRockets] = useState([])

  return (
    <main> WELCOME TO SPACEX</main>
  );
}

export default App;


// https://api.spacexdata.com/v4/rockets

// https://api.spacexdata.com/v4/history