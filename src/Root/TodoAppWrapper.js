import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import AddNewTodo from '../AddNewTodo';
import TodoNav from '../TodoNav/TodoNav';

import { Route, Switch, Redirect } from 'react-router-dom';
import { routeConfig as routes } from '../router';

class TodoAppWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChanges = this.handleChanges.bind(this);
  }

  handleSubmit(newTodo) {
    this.setState(() => {
      return {
        todos: this.state.todos.concat(newTodo)
      };
      //TODO: as well as persist with local storage
    });
  }

  handleChanges(todoId, action) {
    let todos = this.state.todos;
    const index = this.state.todos.findIndex(todo => todoId === todo.id);
    if (action === 'toggleCompletion') {
      todos[index].completed = !todos[index].completed;
      // the to-do corresponding to the index needs to be updated
      this.setState(() => {
        return {
          todos,
        };
      });
    } else if (action === 'remove') {
      todos.splice(index, 1);
      this.setState(() => {
        return {
          todos,
        };
      });
    }
  }

  render() {
    return (
      <div>
        <AddNewTodo
          length={this.state.todos.length}
          handleSubmit={this.handleSubmit}
        />
        <TodoNav />
        <div id="tabs-container">
          <Switch>
            {routes.map( (route,index) => {
              return (
                <Route
	                key={index}
                  exact={route.exact || false}
                  path={route.path}
                  render={props => (
                    <route.component
                      {...props}
                      todos={this.state.todos}
                      wrapperStateHandler={this.handleChanges}
                    />
                  )}
                />
              );
            })}
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    );
  }
}

TodoAppWrapper.propTypes = {};
TodoAppWrapper.defaultProps = {};

export default TodoAppWrapper;
