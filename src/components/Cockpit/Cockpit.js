import React, { useEffect, useRef } from 'react'; // React hook
import cockpitStyles from './Cockpit.module.css';

const Cockpit = props => {
	const toggleBtnRef = useRef(null);

	useEffect(() => {
		// takes function which will run for every lifecycle
		console.log('[Cockpit.js] useEffect');
		// Http request...
		// setTimeout(() => {
		// 	// alert('Save data to cloud');
		// }, 1000);
		toggleBtnRef.current.click();
		console.log(toggleBtnRef.current);
		return () => {
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
	if (props.showPersons) {
		btnClass = cockpitStyles.Red;
	}

	if (props.personsLength <= 2) {
		assignedClasses.push(cockpitStyles.Red);
	}
	if (props.personsLength <= 1) {
		assignedClasses.push(cockpitStyles.bold);
	}

	return (
		<div className={cockpitStyles.Cockpit}>
			<h1>{props.title}</h1>
			<p className={assignedClasses.join(' ')}>This is really working!</p>
			<button ref={toggleBtnRef} className={btnClass} onClick={props.toggle}>
				Toggle Persons
			</button>
		</div>
	);
};

export default React.memo(Cockpit);
