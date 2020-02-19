import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import FormInput from "./components/FormInput";
import FormCard from "./components/FormCard";

function App() {
  const [members, setMembers] = useState([
    {
      id: "",
      role: "",
      email: ""
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
      <FormInput addNewMember={addNewMember} />
      <FormCard members={members} />
    </div>
  );
}

export default App;
