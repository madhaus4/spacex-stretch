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
          <section>
            <h2>The Story</h2>
            <h2>First Flight:</h2>
            <h2>Cost Per Flight:</h2>
            <h2>Height: </h2>
            <h2>Diameter: </h2>
            <h2>Mass: </h2>
          </section>
          <section>
            <p className='details'>{description}</p>
            <p className='first-flight'>{firstFlight}</p>
            <p className='flight-cost'>Cost Per Flight: {cost}</p>
            <p className='rocket-height'>Height: {height} ft.</p>
            <p className='rocket-diameter'>Diameter: {diameter} ft.</p>
            <p className='rocket-mass'>Mass: {mass} lb.</p>
          </section>
        </section>
      </section>
    </main>
  )
}

export default RocketCards;