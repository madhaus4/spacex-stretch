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
      firstFlight={dayjs(rocket.first_flight).format('MM/DD/YYYY')}
      image={rocket.flickr_images[1]}
      height={rocket.height.feet}
      diameter={rocket.diameter.feet}
      mass={rocket.mass.lb.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
    />
  ))

  return(
    <section className='rocket-container'>     
      {allRockets}     
    </section>
  )

}

export default RocketContainer;