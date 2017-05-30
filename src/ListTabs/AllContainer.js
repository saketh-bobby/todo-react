import React from 'react';
import Todo from './shared/Todo'
import GenericListContainer from './shared/GenericListContainer'
import PropTypes from 'prop-types';

const AllContainer = props => {
  return (
    <div>
	      {/* just takes a genericcontainer and puts it's customized data in it */}
	      <GenericListContainer todos={props.todos.map((todo) => <Todo key={todo.id} data={todo} wrapperStateHandler={props.wrapperStateHandler} />)}/>
    </div>
  );
};

AllContainer.propTypes = {
	todos: PropTypes.array.isRequired,
	wrapperStateHandler: PropTypes.func.isRequired
};

export default AllContainer;
