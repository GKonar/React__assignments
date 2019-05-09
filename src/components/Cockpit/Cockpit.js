import React, { useEffect } from 'react'; // React hook
import cockpitStyles from './Cockpit.module.css';

const Cockpit = (props) => {
  useEffect(() => { // takes function which will run for every lifecycle
    console.log('[Cockpit.js] useEffect');
    // Http request...
    const timer = setTimeout(() => {
      alert('Save data to cloud');
    }, 1000);
    return () => {
      clearTimeout(timer);
      console.log('[Cockpit.js] cleanup work in useEffect');
    };
  }, []); // we want to run this data only if props.persons change, when we pass [] an empty array this will run only one time ---> replace componentDidMount

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    };
  });

  const assignedClasses = [];
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
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button
        className={btnClass}
        onClick={props.toggle}
      >Toggle Persons
      </button>
    </div>
  );
};

export default Cockpit;




