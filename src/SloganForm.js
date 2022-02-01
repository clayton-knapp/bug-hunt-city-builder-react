export default function SloganForm(props) {
  const [sloganInput, setSloganInput] = useState([]);
    
  function handleSubmit(e) {
    e.preventDefault();

    props.slogans.push(sloganInput);

    setSloganInput('');
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        Add a slogan to the list!
        <input value={sloganInput} onChange={e => setSloganInput(value)}/>
        <button>Submit</button>
      </form>
    </section>
  );
}
