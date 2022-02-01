import React from 'react';

export default function SkylineDropdown(props) {
  return (
    <div>
      Select a Skyline
      <select onChange={setSkyline(e.target.value)}>
        <option value="1">Pink</option>
        <option value="2">Busy</option>
        <option value="3">Foggy</option>
      </select>
    </div>
  );
}
