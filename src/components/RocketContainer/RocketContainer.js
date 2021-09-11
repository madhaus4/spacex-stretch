import React from 'react';
import './RocketContainer.css';
import RocketCards from '../RocketCards/RocketCards'
import dayjs from 'dayjs';

const RocketContainer = ({ theRockets }) => {
  const allRockets = theRockets.map(rocket => (
    <RocketCards
      key={rocket.name}
      name={rocket.name}
      description={rocket.description}
      cost={rocket.cost_per_launch.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}
      firstFlight={rocket.first_flight}
      image={rocket.flickr_images[0]}
      height={rocket.height.feet}
      diameter={rocket.diameter.feet}
      mass={rocket.mass.lb}
    />
  ))

  return(
    <section className='rocket-container'>     
      {allRockets}}     
    </section>
  )

}

export default RocketContainer;