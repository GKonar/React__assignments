import React from 'react';
import personStyles from './Person.module.css';

const person = props => {
  return (
    <div className={personStyles.Person} >
      <p onClick={props.click}> I am {props.name} and I am {props.age} years old</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};
export default person;