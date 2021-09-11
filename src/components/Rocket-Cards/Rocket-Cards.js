import React from 'react';
import './RocketCards.css';

const RocketCards = ({ id, name, description, cost, image, height, diameter, mass }) => {
  return (
    <section>
      <h1>{name}</h1>
      <section>
        <img src={image} alt={`rocket ${name}`} />
      </section>
      <section>
        
      </section>

    </section>
  )
}

export default RocketCards;