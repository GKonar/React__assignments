import React from 'react';

const withClass = (WrappedComponent, className) => {
	// eslint-disable-next-line react/display-name
	return props => (
		<div className={className}>
			<WrappedComponent {...props} />
		</div>
	);
};

export default withClass;
