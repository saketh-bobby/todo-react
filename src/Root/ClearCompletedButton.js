import React from 'react';
import PropTypes from 'prop-types';

const ClearCompletedButton = (props) => {
	return (
		<div>
			<button onClick={props.handleClearCompleted} >Clear Completed</button>
		</div>
	);
};

ClearCompletedButton.propTypes    = {
	handleClearCompleted: PropTypes.func.isRequired
};

export default ClearCompletedButton;
