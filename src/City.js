import React from 'react';

export default function City(props) {
  return (
    <div className="city">
      <img src={`/waterfront-${props.waterfrontId}.jpeg`}/>
      <img src={`/skyline-${props.skylineId}.jpeg`}/>
      <img src={`/castle-${props.castleId}.jpeg`}/>
    </div>
  );
}
