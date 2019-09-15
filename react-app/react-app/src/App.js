import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <h1>I'm an App</h1>
      <p>this is working</p>
      <Person/>
    </div>
    //React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi!!! I\'m from a react create element method'))
  );
}

export default App;
