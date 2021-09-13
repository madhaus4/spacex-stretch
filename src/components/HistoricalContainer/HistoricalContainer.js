import React, { useState } from 'react';
import './HistoricalContainer.css';
import HistoricalCards from '../HistoricalCards/HistoricalCards';

function HistoricalContainer({ theHistory, launchImages }) {
  const [isFavorited, setIsFavorited] = useState(false)
  const [favoritesList, setFavoritesList] = useState([])

  const addToFavorites = (story) => {
    let newFavorite = {
      id: Date.now(), ...story
    }
    setFavoritesList([...favoritesList, newFavorite])
  }


  const allHistory = theHistory.filter(story => {
    return story.links.article && !story.links.article.includes('www.spacex.com')      
  }).map((story, i) => (
    // console.log('story2', story)
    <HistoricalCards 
      key={story.id}
      story={story}
      // id={story.id}
      // title={story.title}
      // details={story.details}
      // link={story.links.article} 
      image={launchImages[i]} 
      addToFavorites={addToFavorites}
      isFavorited={isFavorited}
    /> 
    ))
    
    return(
      <section className='historical-cards-section'>
        {console.log('favoritesList', favoritesList)}
        <button>View Favorites</button>
        <button>View All</button>
        {allHistory}
      </section>
  )
}

export default HistoricalContainer;