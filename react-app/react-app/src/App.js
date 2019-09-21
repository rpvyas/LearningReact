import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      {name: "Ravi", age: 28},
      {name: "Aditya", age: 31},
      {name: "Melissa", age: 24}
    ],
    showNames : true
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons : [
      {name: newName, age: 28},
      {name: "Aditya", age: 31},
      {name: "Melissa", age: 24}
      ] 
    });
  }

  deletePersonHandler = (index) => {
    let persons = this.state.persons;
    persons.splice(index, 1);
    this.setState({persons: persons});
  }

  togglePersonHandler = (event) => {
    this.setState({
      showNames : !this.state.showNames
    });
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons : [
      {name: "Ravi", age: 28},
      {name: event.target.value, age: 31},
      {name: "Melissa", age: 24}
      ] 
    });
  }  
    // Don't do this 
    // this.state.persons = [
    //   {name: "Melissa", age: 24},
    //   {name: "Ravi", age: 28},
    //   {name: "Aditya", age: 31}
    // ];
    //console.log("button clicked");
 
  // arrow functions not recommended for button onclick, bind is better for performance
  render() {
    const style = {
      font: 'inherit',
      bordor: '1px solid blue',
      padding: '8px',
      backgroundColor: 'white',
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showNames) {
      persons = (
        <div>
          {this.state.persons.map((person,index) => {
            return <Person name = {person.name} age = {person.age} click = {() => this.deletePersonHandler(index)}/>
          })}
          {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age} 
            click={this.switchNameHandler.bind(this,"rpvyas")}
            change={this.nameChangeHandler} >MyHobbies : News
          </Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/> */}
        </div> 
      );
    }


    return (
      <div className="App">
        <h1>I'm an App</h1>
        <p>this is working</p>
        <button style={style} onClick = {this.togglePersonHandler}> Toggle Names </button>
        {persons}
        
      </div>
      //React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi!!! I\'m from a react create element method'))
    );
  }
}

export default App;
