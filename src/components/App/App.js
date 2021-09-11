import React, { useState, useEffect } from 'react'
import { Route } from 'react-router';
import { getData } from '../../Utils/ApiCalls.js';
import HistoricalContainer from '../HistoricalContainer/HistoricalContainer'
import Header from '../Header/Header.js';
import RocketContainer from '../RocketContainer/RocketContainer'
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
    <main>
      
      <Route path='/' render={() => <Header /> } />
      <HistoricalContainer />
    </main>
  );
}

export default App;


// https://api.spacexdata.com/v4/rockets

// https://api.spacexdata.com/v4/history