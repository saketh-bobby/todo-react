import React from 'react';
import PropTypes from 'prop-types';
import './ClearCompletedButton.css';

const ClearCompletedButton = (props) => {
	return (
		<div className="clear-completed-container">
			<button onClick={props.handleClearCompleted} >Clear Completed</button>
		</div>
	);
};

ClearCompletedButton.propTypes    = {
	handleClearCompleted: PropTypes.func.isRequired
};

export default ClearCompletedButton;
