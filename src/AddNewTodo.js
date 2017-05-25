import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class AddNewTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({
      value: evt.target.value,
    });
  }

  render() {
    return (
      <div>
        {/*make this input a controlled component*/}
        <form
	        onSubmit={
	        	(event) => {
        	    event.preventDefault();
        	    this.props.handleSubmit(this.state.value);
            }
          }
        >
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

AddNewTodo.propTypes = {};
AddNewTodo.defaultProps = {};

export default AddNewTodo;
