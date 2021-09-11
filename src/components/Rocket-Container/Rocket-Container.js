import React from 'react';
import './RocketContainer.css';
import RocketCards from '../RocketCards';

const RocketContainer = ({ rockets }) => {
  const allRockets = rockets.map(rocket => (
    <RocketCards
      id={rocket.id}
      name={rocket.name}
      description={rocket.description}
      cost={rocket.cost}
      firstFlight={rocket.firstFlight}
      image={rocket.image}
      height={rocket.height}
      diameter={rocket.diameter}
      mass={rocket.mass}
    />
  ))

  
}

export default RocketContainer;