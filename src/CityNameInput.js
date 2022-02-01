import React from 'react';

export default function CityNameInput(props) {
  return (
    <section>
      What is your city name?
      <input onChange={(e) => props.setCityName(e.target.value)}/>
    </section>
  );
}
