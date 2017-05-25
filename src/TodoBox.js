import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
	    newTodo:''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
  	console.log(evt);
    this.setState({
      value: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    console.log(this.state.value);
    this.setState({
      newTodo: this.state.value,
    });
  }
  render() {
    return (
      <div>
        {/*make this input a controlled component*/}
        <form onSubmit={this.handleSubmit}>
          <div className="todo-textbox-container">
            <input
              type="text"
              id="todo-textbox"
              value={this.state.value}
              onChange={this.handleChange}
              autoComplete="off"
            />
            <button type="submit">Add Task</button>
          </div>
        </form>
      </div>
    );
  }
}

TodoBox.propTypes = {};
TodoBox.defaultProps = {};

export default TodoBox;
