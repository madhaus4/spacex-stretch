import React, { useEffect, useState } from 'react';
import HistoricalCards from '../HistoricalCards/HistoricalCards';
import './HistoricalContainer.css';

function HistoricalContainer({ theHistory, launchImages }) {
  const [favoritesList, setFavoritesList] = useState([])
  const [isFavorited, setIsFavorited] = useState(false)

  const updateFavorites = (story) => {
    let foundFavorite = favoritesList.find(favorite => favorite.id === story.id)

    if (foundFavorite) {
      removeFromFavorites(foundFavorite)
    } else {
      addToFavorites(story)
    }
  }
  
  const addToFavorites = (story) => {
    let newFavorite = {
      id: Date.now(), ...story
    }
    saveFavoriteToStorage(newFavorite)
    setFavoritesList([...favoritesList, newFavorite])
  }

  const removeFromFavorites = (story) => {
    let itemsToKeep = favoritesList.filter(favorite => favorite.id !== story.id)
    setFavoritesList(itemsToKeep)
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
    setIsFavorited(!isFavorited)
  }

  const displayArticles = (dataSet) => {
    return dataSet.filter(story => {
      return story.links.article && !story.links.article.includes('www.spacex.com')})
      .map((story, i) => (
      <HistoricalCards 
        key={story.id}
        story={story}
        image={launchImages[i]} 
        updateFavorites={updateFavorites}
      /> 
    ))
  }
    
  return(
    <section className='historical-cards-container'>
      <header className='articles-header'>
        <h2>Recommended For You</h2>
        <button 
          className='toggle-view-btn'
          onClick={() => toggleDisplay()}
          >{isFavorited ? 'View All' : 'View Favorites'}
        </button>
      </header>
      {!isFavorited && displayArticles(theHistory)}
      {isFavorited && displayArticles(favoritesList)}
    </section>
  )
}

export default HistoricalContainer;