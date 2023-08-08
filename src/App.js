import './App.scss';
import Nav from './components/nav.js';
import { useState } from 'react';
const App = () => {

  // let [name, setName] = useState('');
  let [address, setAddress] = useState('');
  let [todos, setTodos] = useState([
    { id: 1, title: "chụp ảnh" },
    { id: 2, title: "dựng video" },
    { id: 3, title: "chụp ảnh" },
    { id: 4, title: "dựng video" }
  ])
  const onChangeInput = (event) => {
    setAddress(event.target.value);
  }

  const handleEvent = (event) => {
    if (!address) {
      alert("empty input")
      return;
    }
    let todo = { id: "a", title: address };
    setTodos([...todos, todo]);
    setAddress('');
  }

  return (
    <div className="App">
      <Nav />
      <div className='container-content'>
        <div className='todos-container'>
          <div className='todos-header'><h3>To Do Apps</h3></div>
          <div className='todo-input'>
            <div></div>
            <input type='text' value={address} onChange={(event) => onChangeInput(event)} />
            <button type='button' onClick={(event) => handleEvent(event)}>Add</button>
          </div>

          {todos.map(todo => {
            return (
              <li >{todo.title}</li>
            )
          })}

        </div>


      </div>
    </div>

  );
}

export default App;
