import React, { useState, useEffect, useRef } from 'react';
import { Route, Switch } from 'react-router';
import { getData } from '../../Utils/ApiCalls.js';
import {cleanData, checkFavorited} from '../../Utils/utils'
import Header from '../Header/Header';
import HomePage from '../HomePage/HomePage';
import HistoricalContainer from '../HistoricalContainer/HistoricalContainer';
import RocketContainer from '../RocketContainer/RocketContainer';
import Error from '../Error/Error';
import './App.css';
import logo from '../../TheNXTfrontier.png'
import star1 from '../../images/star1.png'
import logoLight from '../../TheNXTfrontier-light.svg'
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
gsap.registerPlugin(CustomEase);

function App() {
  const [history, setHistory] = useState([])
  const [rockets, setRockets] = useState([])
  const [launchImages, setLaunchImages] = useState([])
  const [error, setError] = useState('')
  const twinkleStar = useRef(null)


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
    gsap.to(twinkleStar.current, { duration: .5, scale:7, ease: "slow(0.7, 2, false)", repeat:-1, yoyo:true})

    fetchData();
  }, [])

  const handleFavorite = (ID) => {
     const found = history.find(story => story.id === ID)
     console.log(found, 'That is correct!')
    found.isFavorited = !found.isFavorited
  }

  return (
    <main>
      <Header />
      <Switch>
        <Route exact path='/' render={() => 
          <>
            <HomePage />
            <img src={star1}  ref={twinkleStar} alt='sparkling stars' className='sparkling-star' />

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
      <footer>
        <img src={logoLight} alt='the NXT frontier logo' />
        <p></p>
        <a href='https://www.spacex.com/'>Please visit the SpaceX website for more information</a>
      </footer>
    </main>
  );
}

export default App;