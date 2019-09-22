import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';
import Radium from 'radium';

class App extends Component {
  state = {
    persons : [
      {id: 1, name: "Ravi", age: 28},
      {id: 2, name: "Aditya", age: 31},
      {id: 3, name: "Melissa", age: 24}
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
    let persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons: persons});
  }

  togglePersonHandler = (event) => {
    this.setState({
      showNames : !this.state.showNames
    });
  }

  nameChangeHandler = (event, id) => {
    let personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    let personToBeUpdated = {
      ...this.state.persons[personIndex]
    }
    personToBeUpdated.name = event.target.value;
    let persons = [...this.state.persons];

    persons[personIndex] = personToBeUpdated;

    this.setState({
      persons : persons 
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
      backgroundColor: 'green',
      color: 'white',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if(this.state.showNames) {
      persons = (
        <div>
          {this.state.persons.map((person,index) => {
            return <Person 
              name = {person.name} 
              age = {person.age} 
              click = {() => this.deletePersonHandler(index)}
              key = {person.id}
              change = {(event) => this.nameChangeHandler(event, person.id)}/>
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

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }
    let cssClasses = [];
    if(this.state.persons.length <= 2) {
      cssClasses.push('red');
    }
    if(this.state.persons.length <= 1) {
      cssClasses.push('bold');
    }

    return (
      <div className="App">
        <h1>I'm an App</h1>
        <p className={cssClasses.join(' ')}>this is working</p>
        <button style={style} onClick = {this.togglePersonHandler}> Toggle Names </button>
        {persons}
        
      </div>
      //React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi!!! I\'m from a react create element method'))
    );
  }
}

export default Radium(App);
