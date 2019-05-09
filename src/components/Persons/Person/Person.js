import React, { Component } from 'react';
import personStyles from './Person.module.css';

class Person extends Component {
  render() {
    //eslint-disable-next-line no-console
    console.log('[Person.js] rendering...');

    return (
      <div className={personStyles.Person} >
        <p onClick={this.props.click}> I am {this.props.name} and I am {this.props.age} years old</p>
        <p>{this.props.children}</p>
        <input 
          type="text" 
          onChange={this.props.changed} 
          value={this.props.name} />
      </div>
    );
  }
}

export default Person;


