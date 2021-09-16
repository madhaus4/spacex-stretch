import React from 'react';
import './RocketCards.css';

const RocketCards = ({ name, description, cost, firstFlight, image, height, diameter, mass }) => {
  return (
    <article className='rocket-card'>
      <h1 className='rocket-name'>{name}</h1>
      <section className='card-body'>
        <div className='rocket-image-container'>
          <img className='rocket-image'src={image} alt={`rocket ${name}`} />
        </div>
        <section className='rocket-info'>
          <div className='description-wrapper'>
            <p className='description'>{description}</p>          
            <div className='details'>          
              <p className='first-flight'>
                <span>First Flight:</span> {firstFlight}
              </p>
              <p className='flight-cost'>
                <span>Cost Per Flight:</span> {cost}
              </p>
            </div>
          </div>
          <section className='measurements-wrapper'>
            <div className='measurements'>
              <p>Height:</p> 
              <h2 className='rocket-height'>
              {height} ft.</h2>
            </div>
            <div className='measurements'>
              <p>Mass:</p> 
              <h2 className='rocket-mass'>
              {mass} lb.</h2>
            </div>
            <div className='measurements'>
              <p>Diameter:</p>  
              <h2 className='rocket-diameter'>
              {diameter} ft.</h2>  
            </div>
          </section>  
        </section>
      </section>
    </article>
  )
}

export default RocketCards;