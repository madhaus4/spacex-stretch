import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router';
import { getData } from '../../Utils/ApiCalls.js';
import {cleanData, checkFavorited} from '../../Utils/utils'
import Header from '../Header/Header';
import HomePage from '../HomePage/HomePage';
import HistoricalContainer from '../HistoricalContainer/HistoricalContainer';
import RocketContainer from '../RocketContainer/RocketContainer';
import Error from '../Error/Error';
import './App.css';

function App() {
  const [history, setHistory] = useState([])
  const [rockets, setRockets] = useState([])
  const [launchImages, setLaunchImages] = useState([])
  const [error, setError] = useState('')

  const fetchData = () => {
    getData('v4', 'history')
      .then(data => setHistory(cleanData(data)))
      .catch(error => setError(error))
    getData('v4', 'rockets')
      .then(data => setRockets(data))
      .catch(error => setError(error))
    getData('v5', 'launches')
      .then(data => setLaunchImages([...data[19].links.flickr.original, data[21].links.flickr.original]))
      .catch(error => setError(error))
  }

  useEffect(() => {
    fetchData();
  }, [])

    //function to check localstorage, and if localstorage persist. check isFavorited against incoming ARTICLE?! WHAT?
  //incoming articles have ids correct?
  //checking ALL incoming articles for story.isFavorited === true {if so filter those against the story.id and replace the value to true}
  //
  // const checkLocalStorage = () => {
  //   favoritesList.forEach(favStor => {
  //     if(localStorage){
  //       localStorage.filter(story => story.id === favStor.id)

  //     }

  //   })


  // }

  const handleFavorite = (ID) => {
     history.find(story => story.id === ID ? story.isFavorited = true : false
    )
  }

  return (
    <main>
      <Header />
      <Switch>
        <Route exact path='/' render={() => 
          <>
            <HomePage />
            <HistoricalContainer 
              theHistory={history} 
              launchImages={launchImages}
              handleFavorite={handleFavorite}
              /> 
          </>  
        } />
        <Route exact path='/rockets' render={() => <RocketContainer 
            theRockets={rockets} 
            onLoad={window.scrollTo(0, 0)}/> } 
          />
        <Route render={() => <Error />} />
      </Switch>
      <footer>ThanX</footer>
    </main>
  );
}

export default App;


// https://api.spacexdata.com/v4/rockets

// https://api.spacexdata.com/v4/history