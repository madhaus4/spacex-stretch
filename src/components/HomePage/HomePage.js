import React ,{ useEffect, useRef } from 'react';
import './HomePage.css';
import rocket from '../../images/rocket.png';
import croppedcloud from '../../images/croppedcloud.png';
import twoPuffyStuffs from '../../images/twoPuffyStuffs.png';
import star1 from '../../images/star1.png'
// import firstStar from '../../images/first-star.jpeg'
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
gsap.registerPlugin(CustomEase);
// import { CustomWiggle } from "gsap/CustomWiggle";


function HomePage() {
  const rocketRef = useRef(null);
  const smokeRef = useRef(null);
  const twoSmokeRef = useRef(null);
  // const twinkleStar = useRef(null)

//   CustomWiggle.create("random1", { wiggles: 50, type: "random" });
// gsap.to(graph, { duration: 2.5, ease: "slow(0.7, 2, false)", y: -500 });
// var star = document.querySelector(".star");

// TweenLite.set(star, { scale: 0.5 });

// var tl = new TimelineMax({ repeat: -1, })
//   .to(star, 4, { scale: 1, ease: "random1" }, 0)
//   .to(star, 4, { opacity: 1, ease: "random1" }, 0)
  
useEffect(() => {    
    // gsap.to(twinkleStar.current, { duration: 2.5, scale:2, ease: "slow(0.7, 2, false)" })
    gsap.to(rocketRef.current,{rotation: -50, y: -1000, x: -800, duration: 10, delay: 4});
    gsap.to(smokeRef.current, {duration: 3, scale: 2, ease: 'forward', opacity: 0, delay: 4, rotation: -180});
    gsap.to(twoSmokeRef.current, {duration: 3, scale: 2, ease: 'forward', opacity: 0, delay: 4});
  })

  

  return (
    <section className='page-title-container'>
      <div className='page-details'>
        {/* <img src={star1}  ref={twinkleStar} alt='sparkling stars' className='sparkling-star' /> */}
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
