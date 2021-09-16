import './HomePage.css';

function HomePage() {
  return (
    <section className='page-title-container'>
      <div className='page-details'>
        <h1 className='page-header'>An exploration of SpaceX...</h1>
        <p>The family of Falcon launch vehicles are the first and only orbital class rockets that are resuseable!  They are able to successfully land back on earth AND lower the cost of space access by being able to refly.   </p>
      </div>
      <div
        className='animated-rocket-here'
        >IMG Here
      </div>
    </section>  
  )
}

export default HomePage;
