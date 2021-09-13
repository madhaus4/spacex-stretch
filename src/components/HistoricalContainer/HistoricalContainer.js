import './HistoricalContainer.css';
import HistoricalCards from '../HistoricalCards/HistoricalCards';

function HistoricalContainer({ theHistory, launchImages }) {
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
      {allHistory}
    </section>
  )
}

export default HistoricalContainer;