import './HistoricalCards.css';

function HistoricalCards({ story, image, updateFavorites }) {
  return (
    <article className='historical-card' id={story.id}>
      <img className='rocket-image' src={image} />
      <div className='info-wrapper'>
        <h3>{story.title} ....click here to view all</h3>
        <h3 className='article-details'>{story.details}</h3>
        <button className='favorite-btn'
          onClick={() => updateFavorites(story)}
          >✨
        </button>
      </div>
    </article>
  )
}

export default HistoricalCards;
