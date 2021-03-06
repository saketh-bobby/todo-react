import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AddNewTodo.css'
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
    this.setState( () => ({value:'',labels:''}),this.props.handleSubmit.bind(null,newTodo));
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
          <div className="add-todo-container">
	          <label htmlFor="todo-textbox">
		          <span>Enter the task:</span>
		          <input
			          type="text"
			          id="todo-textbox"
			          value={this.state.value}
			          onChange={this.handleChange}
			          autoComplete="off"
			          autoFocus
		            required={true}
		            />
	          </label>
	          <label htmlFor="priority-control">
		          <span>Priority (More is higher):</span>
		          <select
			          value={this.state.priority}
			          id="priority-control"
			          onChange={this.handlePriorityChange}
		          >
			          {options}
		          </select>
	          </label>
	          <label htmlFor="label-input">
		          <span>Labels (comma or space seperated)</span>
		          <input
			          type="text"
			          value={this.state.labels}
			          onChange={this.handleLabelChange}
			          autoComplete="off"
			          required={true}
		          />
	          </label>

            <button type="submit">Add Task</button>
          </div>
        </form>
      </div>
    );
  }
}

AddNewTodo.propTypes = {
	length: PropTypes.number.isRequired,
	handleSubmit: PropTypes.func.isRequired
};

export default AddNewTodo;
