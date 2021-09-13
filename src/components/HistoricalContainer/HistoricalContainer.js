import './HistoricalContainer.css';
import HistoricalCards from '../HistoricalCards/HistoricalCards';

function HistoricalContainer({ theHistory }) {
  const allHistory = theHistory.filter(story => {
    return story.links.article && !story.links.article.includes('www.spacex.com')      
  }).map(story => (
    <HistoricalCards 
      key={story.id}
      title={story.title}
      eventDate={story.event_date_utc}
      details={story.details}
      link={story.links.article}  
    /> 
  ))
  
  return(
    <section className='historical-cards-section'>
      
    </section>
  )
}

export default HistoricalContainer;