import React from 'react';

export default function CastleDropdown(props) {
  return (
    <div>
      Select a Castle
      <select onChange={e => props.setCastle(e.target.value)}>
        <option value="1">Serious</option>
        <option value="2">Mysterious</option>
        <option value="3">Regal</option>
      </select>
    </div>
  );
}
