import React from 'react';
import PropTypes from 'prop-types';

const GenericListContainer = (props) => {
	return (
		<div>
			{props.todos}
		</div>
	);
};

GenericListContainer.propTypes    = {
	todos: PropTypes.array.isRequired
};
GenericListContainer.defaultProps = {};

export default GenericListContainer;
