import { useState } from 'react';
import './App.css';
import SkylineDropdown from './SkylineDropdown';
import WaterfrontDropdown from './WaterfrontDropdown';
import CastleDropdown from './CastleDropdown';
import SloganList from './SloganList';
import SloganForm from './SloganForm';
import CityNameInput from './CityNameInput';
import City from './City';

function App() {
  const [skylineId, setSkyline] = useState(1);
  const [waterfrontId, setWaterfront] = useState(1);
  const [castleId, setCastle] = useState(1);
  const [cityName, setCityName] = useState('Portland');
  const [slogans, setSlogans] = useState(['The City of Excellence']);

  return (
    <h3>My App</h3>
    <div className="App">
      <City skylineId={skylineId} castleId={castleId} />
      <h1>Welcome to beautiful {cityName}</h1>
      <div className='bottom'>
        <CityNameInput setCityName={props.setCityName} />
        <section className='dropdowns'>
          <WaterfrontDropdown />
          <SkylineDropdown setSkyline={setSkyline}/>
          <CastleDropdown setCastle={setCastle} />
        </section>
        <SloganForm setSlogans={setSlogans} slogans={slogans} />
        <SloganList/>
      </div>
    </div>
  );
}

export App;
