import React, { Component } from 'react';
import personStyles from './Person.module.css';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';

// import Aux from '../../../hoc/Aux'; deprecated
class Person extends Component {
	constructor(props) {
		super(props);
		this.inputElementRef = React.createRef();
	}

	// executes after render()
	componentDidMount() {
		// this.inputElement.focus();
		this.inputElementRef.current.focus();
	}

	render() {
		console.log('[Person.js] rendering...');
		return (
			<React.Fragment>
				<p key="i1" onClick={this.props.click}>
					I am {this.props.name} and I am {this.props.age} years old
				</p>
				<p key="i2">{this.props.children}</p>
				{/* prettier-ignore */}
				<input 
					key="i3" 
					// this.inputElement --->  we create global property
					// ref={(inputEl) => {this.inputElement = inputEl;}}
					ref={this.inputElementRef}
					type="text"
					onChange={this.props.changed} 
					value={this.props.name} 
				/>
			</React.Fragment>
		);
	}
}

// Validate prop types
Person.propTypes = {
	click: PropTypes.func,
	name: PropTypes.string,
	age: PropTypes.number,
	changed: PropTypes.func
};

export default withClass(Person, personStyles.Person);
