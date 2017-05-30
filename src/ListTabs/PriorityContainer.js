import React from 'react';
import Todo from './shared/Todo';
import GenericListContainer from './shared/GenericListContainer';
import PropTypes from 'prop-types';

const PriorityContainer = props => {
  let todos = Object.assign([], props.todos);

  return (
    <GenericListContainer
      todos={todos
        .sort((a, b) => a.priority - b.priority)
        .map(todo => (
          <Todo
            key={todo.id}
            data={todo}
            wrapperStateHandler={props.wrapperStateHandler}
          />
        ))}
    />
  );
};

PriorityContainer.propTypes = {
	todos: PropTypes.array.isRequired,
	wrapperStateHandler: PropTypes.func.isRequired
};


export default PriorityContainer;
