import React from 'react';

export default function WaterfrontDropdown(props) {
  return (
    <div>
      Select a Waterfront
      <select onChange={e => props.setWaterfront(e.target.value)}>
        <option value="1">Dock</option>
        <option value="2">Sunset</option>
        <option value="3">Boats</option>
      </select>
    </div>
  );
}
