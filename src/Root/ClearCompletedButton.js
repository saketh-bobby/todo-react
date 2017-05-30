import React from 'react';
// import PropTypes from 'prop-types';

const ClearCompletedButton = (props) => {
	return (
		<div>
			<button onClick={props.handleClearCompleted} >Clear Completed</button>
		</div>
	);
};

ClearCompletedButton.propTypes    = {};
ClearCompletedButton.defaultProps = {};

export default ClearCompletedButton;
