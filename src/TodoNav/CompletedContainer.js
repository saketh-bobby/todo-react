import React from 'react';
import Todo from './Todo';
// import PropTypes from 'prop-types';

const CompletedContainer = props => {
  return (
    <div>
      {props.todos
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
    </div>
  );
};

CompletedContainer.propTypes = {};
CompletedContainer.defaultProps = {};

export default CompletedContainer;
