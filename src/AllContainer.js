import React from 'react';
import Todo from './Todo'
// import PropTypes from 'prop-types';

const AllContainer = props => {
  return (
    <div>
        {props.todos.map((todo, index) => <Todo key={index} data={todo} />)}
    </div>
  );
};

AllContainer.propTypes = {};
AllContainer.defaultProps = {};

export default AllContainer;
