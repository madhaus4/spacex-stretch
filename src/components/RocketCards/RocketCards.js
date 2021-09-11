import React from 'react';
import './RocketCards.css';

const RocketCards = ({ id, name, description, cost, firstFlight, image, height, diameter, mass }) => {
  return (
    <section>
      <h1>{name}</h1>
      <section>
        <img src={image} alt={`rocket ${name}`} />
      </section>
      <section>
        <p>{description}</p>
        <p>First Flight: {firstFlight}</p>
        <p>Cost Per Flight: {cost}</p>
        <p>Height: {height} feet</p>
        <p>Diameter: {diameter} feet</p>
        <p>Mass: {mass} lb.</p>
      </section>
    </section>
  )
}

export default RocketCards;