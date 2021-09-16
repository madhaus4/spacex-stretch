import React, { useState } from 'react';
import './HistoricalCards.css';
import savedIcon from '../../savedIcon.png';
import unsavedIcon from '../../unsavedIcon.png';


function HistoricalCards({ story, image, updateFavorites }) {
  // const [isFavorited, setIsFavorited] = useState(false)


  // const handleIcon = () => {
  //   setIsFavorited(!isFavorited)
  //   updateFavorites(story)
  // }

  return (
    <article className='historical-card' id={story.id}>
      <div className='img-wrapper'>
        <img className='rocket-image' src={image} />
      </div>
      <div className='info-wrapper'>
        <h3>{story.title}</h3>
        <p className='article-details'>{story.details}</p>
        <a href={story.links.article}>Click here to read the full article</a>
      </div>
      <img 
        className='favorite-btn'
        onClick={() => updateFavorites(story)}
        src={story.isFavorited ? savedIcon : unsavedIcon} alt='add article to reading list' 
      />
    </article>
  )
}

export default HistoricalCards;
