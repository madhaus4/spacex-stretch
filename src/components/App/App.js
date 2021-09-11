import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router';
import { getData } from '../../Utils/ApiCalls.js';
import Header from '../Header/Header.js';
import HistoricalContainer from '../HistoricalContainer/HistoricalContainer';
import RocketContainer from '../RocketContainer/RocketContainer';
import Error from '../Error/Error';
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
      <Header />
      <Switch>
        <Route exact path='/' render={() => <HistoricalContainer theHistory={history} /> } />
        <Route exact path='/rockets' render={() => <RocketContainer 
            theRockets={rockets} 
            onLoad={window.scrollTo(0, 0)}/> } 
          />
        <Route render={() => <Error />} />
      </Switch>
      <footer></footer>
    </main>
  );
}

export default App;


// https://api.spacexdata.com/v4/rockets

// https://api.spacexdata.com/v4/history