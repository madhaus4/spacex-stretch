import React, { useState } from 'react';
import './HistoricalContainer.css';
import HistoricalCards from '../HistoricalCards/HistoricalCards';

function HistoricalContainer({ theHistory, launchImages }) {
  const [isFavorited, setIsFavorited] = useState(true)



  const allHistory = theHistory.filter(story => {
    return story.links.article && !story.links.article.includes('www.spacex.com')      
  }).map((story, i) => (
    <HistoricalCards 
      key={story.id}
      title={story.title}
      details={story.details}
      link={story.links.article} 
      image={launchImages[i]} 
    /> 
  ))
  
  return(
    <section className='historical-cards-section'>
      <button>View Favorites</button>
      <button>View All</button>
      {allHistory}
    </section>
  )
}

export default HistoricalContainer;