import React, { Component } from 'react';
import AddNewTodo from '../AddNewTodo/AddNewTodo';
import TodoNav from '../TodoNav/TodoNav';
import TabbedContainer from '../TabbedContainer/TabbedContainer';
import './TodoAppWrapper.css';

import ClearCompletedButton from '../ClearCompletedButton/ClearCompletedButton';

/*
 *   TODO: add push notifications, add editing a todo and maybe add note taking too and lists also
 * */

class TodoAppWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.handleClearCompleted = this.handleClearCompleted.bind(this);
  }

  handleSubmit(newTodo) {
    this.setState(() => {
      return {
        todos: this.state.todos.concat(newTodo),
      };
      //TODO: as well as persist with firebase
    });
  }

  handleStateChange(todoId, newValue, action) {
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
    } else if (action === 'editTodo') {
      todos[index].value = newValue;
      this.setState(() => ({ todos }));
    }
  }

  handleClearCompleted() {
    let todos = Object.assign([], this.state.todos);
    todos = todos.filter(todo => !todo.completed);
    this.setState(() => ({
      todos,
    }));
  }

  render() {
    const todos = this.state.todos;
    return (
      <div>
        <AddNewTodo length={todos.length} handleSubmit={this.handleSubmit} />
        <TodoNav />
        {todos.length === 0
          ? <div className="empty-container">No Todos for now</div>
          : <TabbedContainer
              todos={todos}
              wrapperStateHandler={this.handleStateChange}
            />}

        <div className="app-footer">
          <div className="todo-count">
            {todos.length !== 1 && todos.length >= 0
              ? `${todos.length} todos`
              : `${todos.length} todo`}
          </div>
          {todos.filter(todo => {
            return todo.completed;
          }).length !== 0
            ? <ClearCompletedButton
                handleClearCompleted={this.handleClearCompleted}
              />
            : null}
        </div>

      </div>
    );
  }
}

export default TodoAppWrapper;
