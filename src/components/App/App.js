import React, { useState, useEffect } from 'react'
import { getData } from '../../Utils/ApiCalls.js';
import HistoricalContainer from '../Historical-Container/Historical-Container'
import RocketContainer from '../Rocket-Container/Rocket-Container'
import './App.css';


function App() {
  const [history, setHistory] = useState([])
  const [rockets, setRockets] = useState([])
  const [error, setError] = useState('')

  const fetchData = () => {
    getData('history')
      .then(data => setHistory(data))
      .catch(error => setError(error))
    getData('rockets')
      .then(data => setRockets(data))
      .catch(error => setError(error))
  }

  useEffect(() => {
    fetchData();
  }, [])


  return (
    <main> WELCOME TO SPACEX</main>
  );
}

export default App;


// https://api.spacexdata.com/v4/rockets

// https://api.spacexdata.com/v4/history