import React from 'react';
import './App.css';
import Form from './Form';
const teams = [{label: 'junior', value: 3}, {label: 'santa Marta', value: 4}];
const players = [{value: 2, label: 'valenciano' , teamid: 3}, {value: 6, label: 'Pibe', teamid: 4}];

function App() {
  return (
    <div className="App">
      <h2 data-testid="Title">Title</h2>
      <p data-testid="intro-message">Lorem ipsum</p>
      <Form teams={teams} players={players}/>
    </div>
  );
}

export default App;
