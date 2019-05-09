import React from 'react';
import cockpitStyles from './Cockpit.module.css';

const cockpit = (props) => {

  let assignedClasses = [];
  let btnClass = '';
  if(props.showPersons) {
    btnClass = cockpitStyles.Red;
  }
  
  if (props.persons.length <= 2) {
    assignedClasses.push(cockpitStyles.Red); 
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(cockpitStyles.bold);
  } 
  
  return (
    <div className={cockpitStyles.Cockpit}>
      <h1>Hi, I am a React App</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button
        className={btnClass}
        onClick={props.toggle}
      >Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;




