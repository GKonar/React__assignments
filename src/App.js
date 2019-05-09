import React, { Component } from 'react';
import myClasses from './App.module.css';

import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';


class App extends Component {
  state = {
    persons: [
      { id: 'qwe', name: 'Max', age: 28 },
      { id: 'dsa', name: 'Manu', age: 29 },
      { id: 'cxz', name: 'Stephanie', age: 26 },
    ],
    otherState: 'some other value',
    showPersons: false,
  };


  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex( p => { // const holds the index 
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => (
            // eslint-disable-next-line
            <ErrorBoundary key={person.id}>
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                changed={(event) => this.nameChangedHandler(event, person.id)} // onChange and event.target.value
              />
            </ErrorBoundary>
          ))}
        </div>
      );

      btnClass = myClasses.Red;
    }

    let assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(myClasses.red); 
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(myClasses.bold);
    } 

    return (
      <div className={myClasses.App}>
        <h1>Hi, I am a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button
          className={btnClass}
          onClick={this.togglePersonsHandler}
        >Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;

// ES6 arrow functions can’t be bound to a this keyword, so it will lexically go up a scope, and use the value of this in the scope in which it was defined.


// For performance reasons React only makes a shallow identity check when it decides if something has to be rerendered. That means React only looks whether the reference has changed, it doesn't check the content. For this reason you have to make sure on your own that the reference changes each time when the content is modified (by modifying a copy and not the original array).


// By manipulating this.state directly you are circumventing React’s state management, which can be potentially dangerous as calling setState() afterwards may replace the mutation you made.