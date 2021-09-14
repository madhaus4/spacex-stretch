import { ReactTinyLink } from 'react-tiny-link';
import './HistoricalCards.css';

function HistoricalCards({ story, image, updateFavorites }) {
  return (
    <article className='historical-card' id={story.id}>
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
      <button
        onClick={() => updateFavorites(story)}
        >✨
      </button>
    </article>
  )
}

export default HistoricalCards;
