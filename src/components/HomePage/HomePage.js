import React ,{ useEffect, useRef } from 'react';
import './HomePage.css';
import rocket from '../../images/rocket.png';
import croppedcloud from '../../images/croppedcloud.png';
import twoPuffyStuffs from '../../images/twoPuffyStuffs.png';
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
gsap.registerPlugin(CustomEase);


function HomePage() {
  const rocketRef = useRef(null);
  const smokeRef = useRef(null);
  const twoSmokeRef = useRef(null);
  
useEffect(() => {    
    gsap.to(rocketRef.current,{rotation: -50, y: -1000, x: -800, duration: 10, delay: 4, repeat: -1});
    gsap.to(smokeRef.current, {duration: 3, scale: 2, ease: 'forward', opacity: 0, delay: 4, rotation: -180, repeat: -1, repeatDelay:7.15});
    gsap.to(twoSmokeRef.current, {duration: 3, scale: 2, ease: 'forward', opacity: 0, delay: 4, repeat: -1, repeatDelay:7.15});
  })

  

  return (
    <section className='page-title-container'>
      <div className='page-details'>
        <h1 className='page-header tracking-in-contract-bck'>An exploration of SpaceX...</h1>
        <p>The family of Falcon launch vehicles are the first and only orbital class rockets that are resuseable!  They are able to successfully land back on earth AND lower the cost of space access by being able to refly.   </p>
      </div>
      <div className='animated-rocket-here'>
        <img src={rocket} alt='rocket' ref={rocketRef} className='rocketship'/>
        <img src={croppedcloud} alt='smokey-smoke' ref={smokeRef} className='puffy-cloud'/>
        <img src={twoPuffyStuffs} alt='extra-smoke' ref={twoSmokeRef} className='double-puff'/>
      </div>
    </section>  
  )
}

export default HomePage;
