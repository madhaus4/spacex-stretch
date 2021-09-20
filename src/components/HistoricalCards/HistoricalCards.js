import React from 'react';
import './HistoricalCards.css';
import savedIcon from '../../images/saved-purple.png';
import unsavedIcon from '../../images/unsaved-purple.png';


function HistoricalCards({ story, image, updateFavorites }) {

  return (
    <article className='historical-card' id={story.id}>
      <div className='article-image-wrapper'>
        <img className='article-image' src={image} />
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
