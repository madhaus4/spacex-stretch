import React from 'react';
import './RocketContainer.css';
import RocketCards from '../RocketCards';

const RocketContainer = (props) => {
  {console.log(props.allRockets)}
  // const allRockets = rockets.map(rocket => (
  //   <RocketCards
  //     key={rocket.name}
  //     name={rocket.name}
  //     description={rocket.description}
  //     cost={rocket.cost_per_launch}
  //     firstFlight={rocket.first_flight}
  //     image={rocket.flickr_images[0]}
  //     height={rocket.height.feet}
  //     diameter={rocket.diameter.feet}
  //     mass={rocket.mass.lb}
  //   />
  // ))

  return(
    <section className='rocket-container'>     
      <h1>Am I here?</h1>      
    </section>
  )

}

export default RocketContainer;