function Person(props) {
    return (
      <div className="person">
        <h1>{props.name}</h1>
        <p>Age {props.age}</p>
      </div>
    );
  }
  
  // variable containing some jsx
  var app = (
    <div> 
      <Person name="Ravi Vyas" age="28"/>
      <Person name="Aditya Vyas" age="31"/>
    </div>
  );
  
  ReactDOM.render(
    <Person name="Ravi Vyas" age="28"/>,
    document.querySelector('#p1')
  );
  
  ReactDOM.render(
    <Person name="Aditya Vyas" age="31"/>,
    document.querySelector('#p2')
  );
  
  ReactDOM.render(
    app,
    document.querySelector('#app')
  );