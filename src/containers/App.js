import React, { Component } from 'react';
import myClasses from './App.module.css';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

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

    if (this.state.showPersons) {
      persons =  <Persons 
        persons = {this.state.persons}
        clicked = {this.deletePersonHandler}
        changed = {this.nameChangedHandler}
      />;
    }

    return (
      <div className={myClasses.App}>
        <Cockpit 
          persons = {this.state.persons}
          showPersons = {this.state.showPersons}
          toggle = {this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;

// ES6 arrow functions can’t be bound to a this keyword, so it will lexically go up a scope, and use the value of this in the scope in which it was defined.


// For performance reasons React only makes a shallow identity check when it decides if something has to be rerendered. That means React only looks whether the reference has changed, it doesn't check the content. For this reason you have to make sure on your own that the reference changes each time when the content is modified (by modifying a copy and not the original array).


// By manipulating this.state directly you are circumventing React’s state management, which can be potentially dangerous as calling setState() afterwards may replace the mutation you made.