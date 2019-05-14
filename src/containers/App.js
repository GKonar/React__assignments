import React, { Component } from 'react';
import myClasses from './App.module.css';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';

class App extends Component {
	constructor(props) {
		super(props);
		//eslint-disable-next-line no-console
		console.log('[App.js] constructor');
	}

	// state does everything automatically, add constructor call super(props) and set state in the constructor //
	state = {
		persons: [
			{ id: 'qwe', name: 'Max', age: 28 },
			{ id: 'dsa', name: 'Manu', age: 29 },
			{ id: 'cxz', name: 'Stephanie', age: 26 }
		],
		otherState: 'some other value',
		showPersons: false,
		showCockpit: true,
		changeCounter: 0
	};

	static getDerivedStateFromProps(props, state) {
		//eslint-disable-next-line no-console
		console.log('[App.js] getDerivedStateFromProps', props);
		return state;
	}

	componentDidMount() {
		//eslint-disable-next-line no-console
		console.log('[App.js] componentDidMount');
	}

	shouldComponentUpdate(nextProps, nextState) {
		//eslint-disable-next-line no-console
		console.log('[App.js] shouldComponentUpdate');
		return true;
	}

	componentDidUpdate() {
		//eslint-disable-next-line no-console
		console.log('[App.js] componentDidUpdate');
	}

	nameChangedHandler = (event, id) => {
		const personIndex = this.state.persons.findIndex(p => {
			// const holds the index
			return p.id === id;
		});

		const person = {
			...this.state.persons[personIndex]
		};

		person.name = event.target.value;

		const persons = [...this.state.persons];
		persons[personIndex] = person;

		// Correct way to update state when U rely on previous state
		this.setState((prevState, props) => {
			return {
				persons: persons,
				changeCounter: prevState.changeCounter + 1
			};
		});
	};

	deletePersonHandler = personIndex => {
		// const persons = this.state.persons.slice();
		const persons = [...this.state.persons];
		persons.splice(personIndex, 1);
		this.setState({ persons: persons });
	};

	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({ showPersons: !doesShow });
	};

	render() {
		//eslint-disable-next-line no-console
		console.log('[App.js] render');
		let persons = null;

		if (this.state.showPersons) {
			persons = (
				<Persons persons={this.state.persons} clicked={this.deletePersonHandler} changed={this.nameChangedHandler} />
			);
		}

		return (
			<Aux>
				<button
					onClick={() => {
						this.setState({ showCockpit: false });
					}}
				>
					Remove Cockpit
				</button>
				{this.state.showCockpit ? (
					<Cockpit
						title={this.props.appTitle}
						personsLength={this.state.persons.length}
						showPersons={this.state.showPersons}
						toggle={this.togglePersonsHandler}
					/>
				) : null}
				{persons}
			</Aux>
		);
	}
}

export default withClass(App, myClasses.App);

// ES6 arrow functions can’t be bound to a this keyword, so it will lexically go up a scope, and use the value of this in the scope in which it was defined.

// For performance reasons React only makes a shallow identity check when it decides if something has to be rerendered. That means React only looks whether the reference has changed, it doesn't check the content. For this reason you have to make sure on your own that the reference changes each time when the content is modified (by modifying a copy and not the original array).

// By manipulating this.state directly you are circumventing React’s state management, which can be potentially dangerous as calling setState() afterwards may replace the mutation you made.

// IMPORTANT
// In the class based components props are access with the this keyword
