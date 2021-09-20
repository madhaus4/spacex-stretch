import React, { useEffect, useState } from 'react';
import HistoricalCards from '../HistoricalCards/HistoricalCards';
import './HistoricalContainer.css';

function HistoricalContainer({ theHistory, launchImages, handleFavorite }) {
  const [favoritesList, setFavoritesList] = useState([])
  const [isFavoritedDisplayed, setisFavoritedDisplayed] = useState(false)


  const updateFavorites = (story) => {
    let foundFavorite = favoritesList.find(favorite => favorite.id === story.id)

    if (foundFavorite) {
      removeFromFavorites(foundFavorite)
    } else {
      addToFavorites(story)
      // handleFavorite(story.id)
    }
  }

  const addToFavorites = (story) => {
    let newFavorite = {
      id: story.id, 
      isFavorited: true,
      links: story.links,
      event_date_utc: story.event_date_utc,
      event_date_utix: story.event_date_utix,
      details: story.details,
      title: story.title,
    }
    handleFavorite(story.id)
    saveFavoriteToStorage(newFavorite)
    setFavoritesList([...favoritesList, newFavorite])
  }

  useEffect(() => {

  }, [])

  const removeFromFavorites = (story) => {
    let itemsToKeep = favoritesList.filter(favorite => favorite.id !== story.id)
    setFavoritesList(itemsToKeep)
    handleFavorite(story.id)
    removeFavoriteFromStorage(story.id)
  }

  const saveFavoriteToStorage = (story) => {
    localStorage.setItem(story.id, JSON.stringify(story))
  }  

  const retrieveFavoritesFromStorage = () => {
    const keys = Object.keys(localStorage).map(element => {
      return JSON.parse(localStorage.getItem(element))
    })
    setFavoritesList(keys)
  }

  const removeFavoriteFromStorage = (ID) => {
    localStorage.removeItem(ID)
  }

  useEffect(() => {
    retrieveFavoritesFromStorage()
  }, [])

  const toggleDisplay = () => {
    setisFavoritedDisplayed(!isFavoritedDisplayed)
  }

  const displayArticles = (dataSet) => {
    const cards =  dataSet.filter(story => {
      return story.links.article && !story.links.article.includes('www.spacex.com')})
      .map((story, i) => (
      <HistoricalCards 
        key={story.id}
        story={story}
        image={launchImages[i]} 
        updateFavorites={updateFavorites}
      /> 
    ))

    if(cards.length === 0 && dataSet === favoritesList) {
      return <h2>Nothing bookmarked yet. Checkout the articles!</h2>
    } else {
      return cards
    }
  }
    
  return(
    <section className='articles-container'>
      <header className='articles-header'>
        <h2>Recommended For You</h2>
        <button 
          className='toggle-view-btn'
          onClick={() => toggleDisplay()}
          >{isFavoritedDisplayed ? 'View All' : 'My Reading List'}
        </button>
      </header>
      {theHistory.length === 0 && <h2 className='article-error-msg'>Loading error. Please try again</h2>}
      <div className='articles-wrapper'>
        {!isFavoritedDisplayed && displayArticles(theHistory)}
        {isFavoritedDisplayed && displayArticles(favoritesList)}
      </div>  
    </section>
  )
}

export default HistoricalContainer;