import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class AddNewTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
	    labels:'',
      priority: 1,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePriorityChange = this.handlePriorityChange.bind(this);
    this.handleLabelChange = this.handleLabelChange.bind(this);
  }

  handleChange(evt) {
    this.setState({
      value: evt.target.value,
    });
  }

  handlePriorityChange(evt) {
    this.setState({
      priority: evt.target.value,
    });
  }

  handleLabelChange(evt){
  	this.setState({
			labels: evt.target.value
		});
  }

  handleSubmit(event) {
    event.preventDefault();
    const length = this.props.length;
    const newTodo = {
      id: length,
      completed: false,
      ...this.state,
    };
    this.props.handleSubmit(newTodo);
  }

  render() {
    let options = [];
    for (let i = 1; i <= 10; i++) {
      options.push(<option key={i} value={i}>{i}</option>);
    }
    return (
      <div>
        <form
          onSubmit={
            this.handleSubmit
          } /* calls handlesubmit on props see definition*/
        >
          <div className="todo-textbox-container">
            <input
              type="text"
              id="todo-textbox"
              value={this.state.value}
              onChange={this.handleChange}
              autoComplete="off"
            />
            <select
              value={this.state.priority}
              name="priority-control"
              id="priority-control"
              onChange={this.handlePriorityChange}
            >
              {options}
            </select>
            <input
              type="text"
              value={this.state.labels}
              onChange={this.handleLabelChange}
              autoComplete="off"
              placeholder="labels (comma or space seperated)"
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
