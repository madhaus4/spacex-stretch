import React, { useState } from 'react';
import './HistoricalContainer.css';
import HistoricalCards from '../HistoricalCards/HistoricalCards';

function HistoricalContainer({ theHistory, launchImages }) {
  const [isFavorited, setIsFavorited] = useState(false)
  const [favoritesList, setFavoritesList] = useState([])

  const toggleFavorites = (story) => {
    if (!isFavorited) {
      console.log('falsyFAV')
      addToFavorites(story)
    } else {
      console.log('truthyFAV')
      removeFromFavorites(story)
    }
  }
  
  const addToFavorites = (story) => {
    console.log('ADDME')
    let newFavorite = {
      id: Date.now(), ...story
    }
    setIsFavorited(true)
    setFavoritesList([...favoritesList, newFavorite])
  }

  const removeFromFavorites = (story) => {
    console.log('DELETE')
    let itemsToKeep = favoritesList.filter(favorite => favorite.id !== story.id)
    // console.log('itemsToKeep', itemsToKeep)

    setFavoritesList(itemsToKeep)
    setIsFavorited(false)
  }

  const allHistory = theHistory.filter(story => {
    return story.links.article && !story.links.article.includes('www.spacex.com')      
  }).map((story, i) => (
    // console.log('story2', isFavorited)
    <HistoricalCards 
      key={story.id}
      story={story}
      // id={story.id}
      // title={story.title}
      // details={story.details}
      // link={story.links.article} 
      image={launchImages[i]} 
      // addToFavorites={addToFavorites}
      toggleFavorites={toggleFavorites}
      isFavorited={isFavorited}
    /> 
    ))
    
    return(
      <section className='historical-cards-section'>
        {console.log('isFavorited', isFavorited)}
        {console.log('favoritesList', favoritesList)}
        <button>View Favorites</button>
        <button>View All</button>
        {allHistory}
      </section>
  )
}

export default HistoricalContainer;