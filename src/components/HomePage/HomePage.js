import React ,{ useEffect, useRef } from 'react';
import  { gsap }  from 'gsap';
import './HomePage.css';
import rocket from '../../rocket.png'

function HomePage() {
  const rocketRef = useRef();
  
  useEffect(() => {
    console.log(rocketRef)
    gsap.to(rocketRef.current,{rotation: 0, y: -1000, duration: 10});
  })

  return (
    <section className='page-title-container'>
      <div className='page-details'>
        <h1 className='page-header tracking-in-contract-bck'>An exploration of SpaceX...</h1>
        <p>The family of Falcon launch vehicles are the first and only orbital class rockets that are resuseable!  They are able to successfully land back on earth AND lower the cost of space access by being able to refly.   </p>
      </div>
      <div className='animated-rocket-here'>
        <img src={rocket} alt='rocket' ref={rocketRef}/>
      </div>
    </section>  
  )
}

export default HomePage;
