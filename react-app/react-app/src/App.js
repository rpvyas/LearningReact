import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      {name: "Ravi", age: 28},
      {name: "Aditya", age: 31},
      {name: "Melissa", age: 24}
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>I'm an App</h1>
        <p>this is working</p>
        <button> Switch Names </button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>MyHobbies : News</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
      //React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi!!! I\'m from a react create element method'))
    );
  }
}

export default App;
