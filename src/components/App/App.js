import React, { useState, useEffect, useRef } from 'react';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import { getData } from '../../Utils/ApiCalls.js';
import { cleanData } from '../../Utils/utils'
import Header from '../Header/Header';
import HomePage from '../HomePage/HomePage';
import HistoricalContainer from '../HistoricalContainer/HistoricalContainer';
import RocketContainer from '../RocketContainer/RocketContainer';
import Error from '../Error/Error';
import './App.css';
import star1 from '../../images/star1.png'
import logoLight from '../../TheNXTfrontier-light.svg'
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { RoughEase } from "gsap/EasePack";

gsap.registerPlugin(CustomEase);
gsap.registerPlugin(RoughEase);

function App() {
  const [history, setHistory] = useState([])
  const [rockets, setRockets] = useState([])
  const [launchImages, setLaunchImages] = useState([])
  const [error, setError] = useState('')
  const twinkleStar = useRef(null)

  
  let tl1 = gsap.timeline();
  
  const fetchData = () => {
    getData('v4', 'history')
      .then(data => setHistory(cleanData(data)))
      .catch(error => setError(error.status))
      .catch(error => displayError(error))
    getData('v4', 'rockets')
      .then(data => setRockets(data))
      .catch(error => setError(error))
    getData('v5', 'launches')
      .then(data => setLaunchImages([...data[19].links.flickr.original, data[21].links.flickr.original]))
      .catch(error => setError(error))
  }

  const displayError = (response) => {
    const errorCode = response.status;
    console.log(errorCode)
    setError(errorCode)
  }

  useEffect(() => {
    tl1.to('.star1', { duration: 3, scale:4, ease: "steps(12)", repeat:-1, yoyo:true})
    tl1.to('.star2', { duration: 1, scale:4, ease: "slow(0.7, 2, false)", repeat:-1, yoyo:true})
    tl1.to('.star3', { duration: 1, scale:2, ease: "elastic.out( 2.5,0.3)", repeat:-1, yoyo:true})
    tl1.to('.star4', { duration: 1, scale:3, ease: RoughEase.ease.config({strength:3, points:50, taper:"both", randomize:true}), repeat:-1, yoyo:true})
    tl1.to('.star5', { duration: 3, scale:7, ease: "slow(0.7, 2, false)", repeat:-1, yoyo:true})
    console.log(twinkleStar, ' :twinklestar')
    fetchData();
  }, [])




  const handleFavorite = (ID) => {
    const found = history.find(story => story.id === ID)
    found.isFavorited = !found.isFavorited
  }

  return (
    <>
    <div className='star-container'>
      <img src={star1}  id='twinkle1' ref={twinkleStar} alt='sparkling stars' className='star1 star sparkling-star1' />
      <img src={star1}  id='twinkle2' ref={twinkleStar} alt='sparkling stars' className='star1 star sparkling-star2' />
      <img src={star1}  id='twinkle3' ref={twinkleStar} alt='sparkling stars' className='star1 star sparkling-star4' />
      <img src={star1}  id='twinkle4' ref={twinkleStar} alt='sparkling stars' className='star2 star sparkling-star2' />
      <img src={star1}  id='twinkle5' ref={twinkleStar} alt='sparkling stars' className='star2 star sparkling-star4' />
      <img src={star1}  id='twinkle6' ref={twinkleStar} alt='sparkling stars' className='star2 star sparkling-star3' />
      <img src={star1}  id='twinkle7' ref={twinkleStar} alt='sparkling stars' className='star2 star sparkling-star5' />
      <img src={star1}  id='twinkle8' ref={twinkleStar} alt='sparkling stars' className='star3 star sparkling-star3' />
      <img src={star1}  id='twinkle9' ref={twinkleStar} alt='sparkling stars' className='star3 star sparkling-star1' />
      <img src={star1}  id='twinkle10' ref={twinkleStar} alt='sparkling stars' className='star3 star sparkling-star3' />
      <img src={star1}  id='twinkle11' ref={twinkleStar} alt='sparkling stars' className='star4 star sparkling-star4' />
      <img src={star1}  id='twinkle12' ref={twinkleStar} alt='sparkling stars' className='star4 star sparkling-star2' />
      <img src={star1}  id='twinkle13' ref={twinkleStar} alt='sparkling stars' className='star4 star sparkling-star4' />
      <img src={star1}  id='twinkle14' ref={twinkleStar} alt='sparkling stars' className='star5 star sparkling-star5' />
      <img src={star1}  id='twinkle15' ref={twinkleStar} alt='sparkling stars' className='star5 star sparkling-star4' />
      <img src={star1}  id='twinkle16' ref={twinkleStar} alt='sparkling stars' className='star5 star sparkling-star3' />
    </div>
    <main>
      <Header />
      <Switch>
        <Route exact path='/' render={() => 
          <div>
            <HomePage />
            <HistoricalContainer 
              theHistory={history} 
              launchImages={launchImages}
              handleFavorite={handleFavorite}
              /> 
          </div>  
        } />
        <Route exact path='/rockets' render={() => <RocketContainer 
            theRockets={rockets} 
            onLoad={window.scrollTo(0, 0)}/> } 
          />
        <Route render={() => <Error />} />
      </Switch>
      <footer>
        <Link to='/'
          onClick={() => {
            window.location.reload();
            window.scrollTo(0, 0);
          }}
        >
          <img src={logoLight} alt='the NXT frontier logo' className='footer-logo' />
        </Link>
        <p></p>
        <a href='https://www.spacex.com/'>Please visit the SpaceX website for more information</a>
        </footer>
    </main>
    </>
  );
}


export default App;