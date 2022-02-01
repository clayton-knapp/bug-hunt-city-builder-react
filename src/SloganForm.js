import { useState } from 'react';

export default function SloganForm(props) {
  const [sloganInput, setSloganInput] = useState([]);
    
  function handleSubmit(e) {
    e.preventDefault();

    props.setSlogans([...props.slogans, sloganInput]);

    setSloganInput('');
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        Add a slogan to the list!
        <input value={sloganInput} onChange={e => setSloganInput(e.target.value)}/>
        <button>Submit</button>
      </form>
    </section>
  );
}
