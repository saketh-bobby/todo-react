import React from 'react';
import Todo from './Todo';
// import PropTypes from 'prop-types';

const PriorityContainer = props => {
	let todos = Object.assign([],props.todos);

	return (
		<div>
			{
				todos.sort(
					(a,b) => (a.priority - b.priority)
				)
				.map(todo => (
					<Todo
						key={todo.id}
						data={todo}
						wrapperStateHandler={props.wrapperStateHandler}
					/>
				))}
		</div>
	);
};

PriorityContainer.propTypes = {};
PriorityContainer.defaultProps = {};

export default PriorityContainer;
