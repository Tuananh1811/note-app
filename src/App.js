import './App.css';
import Nav from './components/nav.js';
import { useState } from 'react';
const App = () => {

  let [name, setName] = useState('');
  let [address, setAddress] = useState('');

  const onChangeInput = (event) => {
    setAddress(event.target.value);
  }

  const handleEvent = (event) => {
    setName(address)
  }

  return (
    <div className="App">
      <Nav />
      <div>
        <h1>Lập trình react with {name}</h1>
        <input type='text' value={address} onChange={(event) => onChangeInput(event)} />
        <button type='button' onClick={(event) => handleEvent(event)}>Click me</button>
      </div>
    </div>
  );
}

export default App;
