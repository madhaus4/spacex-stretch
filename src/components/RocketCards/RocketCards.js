import React from 'react';
import './RocketCards.css';

const RocketCards = ({ name, description, cost, firstFlight, image, height, diameter, mass }) => {
  return (
    <main className='rocket-card'>
      <h1 className='rocket-name'>{name}</h1>
      <section className='card-body'>
        <section className='rocket-pic-container'>
          <img className='rocket-pic'src={image} alt={`rocket ${name}`} />
        </section>
        <section className='rocket-info'>
          <div>
            <p className='description'>{description}</p>          
          </div>
          <div className='details'>          
            <p className='first-flight'>
              <span>First Flight:</span> {firstFlight}</p>
            <p className='flight-cost'>
              <span>Cost Per Flight:</span> {cost}</p>
            <p className='rocket-height'>
              <span>Height:</span> {height} ft.</p>
            <p className='rocket-diameter'>
              <span>Diameter:</span>  {diameter} ft.</p>           
            <p className='rocket-mass'>
              <span>Mass:</span> {mass} lb.</p>
          </div>
        </section>
      </section>
    </main>
  )
}

export default RocketCards;