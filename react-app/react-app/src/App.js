import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <h1>I'm an App</h1>
      <p>this is working</p>
      <Person name="Ravi" age="28"/>
      <Person name="Aditya" age="31"/>
      <Person name="Melissa" age="24"/>
    </div>
    //React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi!!! I\'m from a react create element method'))
  );
}

export default App;
