import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Form from "./components/Form"

function App() {
  const [members, setMembers] = useState([
    {
      id: 1,
      role: "Happy little quote",
      email: "inquiry@gmail.com"
    }
  ]);

  const addNewMember = member => {
    const newMembers = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };

    setMembers([...members, newMembers]);
  };


  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <Form addNewMember={addNewMember} />
    </div>
  );
}

export default App;
