import React from 'react';
import './RocketContainer.css';
// import RocketCards from '../RocketCards';
import RocketCards from '../RocketCards/RocketCards'

const RocketContainer = ({ rockets }) => {
  const allRockets = rockets.map(rocket => (
    <RocketCards
      key={rocket.id}
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

  return(
    <section className='rocket-container'>     
      {allRockets}          
    </section>
  )

}

export default RocketContainer;