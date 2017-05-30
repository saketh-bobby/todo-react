import React from 'react';
import Todo from './shared/Todo';
import GenericListContainer from './shared/GenericListContainer';
import PropTypes from 'prop-types';

const PendingContainer = props => {
  return (
    <GenericListContainer
      todos={props.todos
        .filter(todo => {
          return !todo.completed;
        })
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

PendingContainer.propTypes = {
	todos: PropTypes.array.isRequired,
	wrapperStateHandler: PropTypes.func.isRequired
};

export default PendingContainer;
