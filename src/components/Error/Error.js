import React from 'react';
import './Error.css';
import { muskQuotes } from '../../Utils/muskQuotes';

const Error = () => {

  const randomizeMusk = () => {
    const randomIndex =  Math.floor(Math.random() * muskQuotes.length);
    return muskQuotes[randomIndex]
  }


  return (
    <div className='error-handling'> 
      <h1 className='error-heading'> Houston, we have a problem...</h1>      
      <h2 className='error-msg'>Please check your flight path (url) and make any necessary adjustments, Space Cadet. </h2>
      <div className='musk-wisdom'>
        <p>"{randomizeMusk()}" - Elon Musk</p>      
      </div>
    </div>
  )
}

export default Error;