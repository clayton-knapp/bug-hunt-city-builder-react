import React from 'react';
import Slogan from './Slogan';

export default function SloganList({ slogans }) {
  return (
    <section>
      <h2>Your slogans:</h2>
      {props.slogans.map((slogan) => <Slogan />)}
    </section>
  );
}
