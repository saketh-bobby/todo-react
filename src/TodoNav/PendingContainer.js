import React from 'react';
import Todo from './Todo';
// import PropTypes from 'prop-types';

const PendingContainer = props => {
  return (
    <div>
      {props.todos
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
    </div>
  );
};

PendingContainer.propTypes = {};
PendingContainer.defaultProps = {};

export default PendingContainer;
