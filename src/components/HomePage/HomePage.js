import React ,{ useEffect, useRef } from 'react';
import  { gsap }  from 'gsap';
import './HomePage.css';
import rocketFire from '../../images/rocketFire.png';
import smoke from '../../images/smoke.png';

function HomePage() {
  const rocketRef = useRef(null);
  const smokeRef = useRef(null);
  
  useEffect(() => {
    gsap.to(rocketRef.current,{rotation: -50, y: -1000, x: -800, duration: 10, delay: 0.75});
    gsap.to(smokeRef.current, {rotation: -50, delay: 1})
  })

  return (
    <section className='page-title-container'>
      <div className='page-details'>
        <h1 className='page-header tracking-in-contract-bck'>An exploration of SpaceX...</h1>
        <p>The family of Falcon launch vehicles are the first and only orbital class rockets that are resuseable!  They are able to successfully land back on earth AND lower the cost of space access by being able to refly.   </p>
      </div>
      <div className='animated-rocket-here'>
        <img src={rocketFire} alt='rocket' ref={rocketRef}/>
        <img src={smoke} alt='smokey-smoke' ref={smokeRef}/>
      </div>
    </section>  
  )
}

export default HomePage;
