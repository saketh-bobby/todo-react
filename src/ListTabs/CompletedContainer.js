import React from 'react';
import GenericListContainer from './shared/GenericListContainer';
import Todo from './shared/Todo';
import PropTypes from 'prop-types';

const CompletedContainer = props => {
  return (
    <GenericListContainer
      todos={props.todos
        .filter(todo => {
          return todo.completed;
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

CompletedContainer.propTypes = {
	todos: PropTypes.array.isRequired,
	wrapperStateHandler: PropTypes.func.isRequired
};

export default CompletedContainer;
