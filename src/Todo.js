import React from 'react';
// import PropTypes from 'prop-types';

const Todo = (props) => {
	return (
		<div>
			{props.data}
		</div>
	);
};

Todo.propTypes    = {};
Todo.defaultProps = {};

export default Todo;
