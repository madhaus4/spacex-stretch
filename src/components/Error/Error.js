import React from 'react';
import './Error.css';
import logoLight from '../../TheNXTfrontier-light.svg'

const Error = () => {




  return (
    <div className='error-handling'> 
      <h1 className='error-heading'> Houston, we have a problem...</h1>      
      <p className='error-msg'>Please check your flight path (url) and make any necessary adjustments, Space Cadet. </p>
    </div>
  )
}

export default Error;