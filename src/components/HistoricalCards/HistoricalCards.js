import { ReactTinyLink } from 'react-tiny-link';
import './HistoricalCards.css';

function HistoricalCards({ story, image, updateFavorites }) {
  return (
    <article className='historical-card' id={story.id}>
      {/* <div className='div-wrap'>
        <ReactTinyLink
          cardSize="large"
          showGraphic={true}
          maxLine={2}
          minLine={1}
          url={story.links.article}
          header={story.title}
          description={story.details}
          defaultMedia={image}
        />
        </div> */}
        <div className='linked-article'>
          <img className='rocket-image' src={image} />
          <h2>{story.title} ....click here to view all</h2>
          <h2>{story.details}</h2>
        </div>
        <button className='favorite-btn'
          onClick={() => updateFavorites(story)}
          >✨
        </button>
      
    </article>
  )
}

export default HistoricalCards;
