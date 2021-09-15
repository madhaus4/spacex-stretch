import './HistoricalCards.css';
import savedIcon from '../../savedIcon.png';
import unsavedIcon from '../../unsavedIcon.png';


function HistoricalCards({ story, image, updateFavorites }) {
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
      {/* <button className='favorite-btn'
        onClick={() => updateFavorites(story)}
        >click 
      </button> */}
      <img 
        className='favorite-btn'
        onClick={() => updateFavorites(story)}
        src={unsavedIcon} alt='add article to reading list' 
      />
    </article>
  )
}

export default HistoricalCards;
