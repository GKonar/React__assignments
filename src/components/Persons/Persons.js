import React, { Component }from 'react';
import Person from './Person/Person';

class Persons extends Component {
  // static getDerivedStateFromProps(props, state) {
  //   //eslint-disable-next-line no-console
  //   console.log('[Person.js] getDerivedStateFromProps');
  //   return state;
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Person.js] shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Person.js] getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate() {
    console.log('[Person.js] componentDidUpdate');
  }

  componentWillUnmount() { //it executes right before component will be removed
    console.log('[Person.js] componentWillUnmount');
  }
  
  render() {
    console.log('[Persons.js] rendering...') ;
    return this.props.persons.map((person, index) => {  
      return ( 
        <Person 
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={(event) => this.props.changed(event, person.id)}
        />
      );
    }); 
  }
}

export default Persons;