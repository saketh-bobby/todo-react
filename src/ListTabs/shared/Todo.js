import React from 'react';
import PropTypes from 'prop-types';
import './Todo.css';
class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.editTodo = false;
    this.state = {
      initValue: this.props.data.value,
      editTodo: false,
      editingValue: this.props.data.value,
    };
    this.handleCompletionToggle = this.handleCompletionToggle.bind(this);
    this.handleRemoval = this.handleRemoval.bind(this);
    this.toggleEditing = this.toggleEditing.bind(this);
    this.handleEditChange = this.handleEditChange.bind(this);
    this.shouldEditComplete = this.shouldEditComplete.bind(this);
  }

  handleCompletionToggle() {
    this.props.wrapperStateHandler(this.props.data.id, '', 'toggleCompletion');
  }

  handleRemoval() {
    this.props.wrapperStateHandler(this.props.data.id, '', 'remove');
  }

  toggleEditing(evt) {
    this.setState(() => ({ editTodo: !this.state.editTodo }));
  }

  shouldEditComplete(evt) {
    const value = this.state.editingValue;
    if (evt.key === 'Enter') {
      this.setState(() => ({
        editingValue: value,
        editTodo: false,
      }));
    } else if (evt.key === 'Escape') {
      this.setState(() => ({
        editingValue: this.state.initValue,
        editTodo: false,
      }));
    }
  }

  handleEditChange(evt) {
    const value = evt.target.value;
    this.setState(() => ({
      editingValue: value,
    }));
  }

  render() {
    const labels = this.props.data.labels.split(/\s+|,/);
    return (
      <div className="todo-item">
        <div className="toggle-completed" onClick={this.handleCompletionToggle}>
          {this.props.data.completed
            ? <i className="fa fa-check-square" />
            : <i className="fa fa-square-o" />}
        </div>
        {this.state.editTodo === false
          ? <div onDoubleClick={this.toggleEditing} className="todo-value">
              {this.state.editingValue}
            </div>
          : <input
              className="todo-value"
              onChange={this.handleEditChange}
              onKeyDown={this.shouldEditComplete}
              value={this.state.editingValue}
              autoFocus
              onBlur={this.toggleEditing}
            />}
        <div className="remove-button" onClick={this.handleRemoval}>
          <i className="fa fa-remove" />
        </div>

        <div className="priority-pill-container">
          <div
            id="priority-pill"
            className={(() => {
              const priority = this.props.data.priority;
              if (priority <= 3) {
                return 'pill-normal';
              } else if (priority <= 6) {
                return 'pill-warning';
              } else {
                return 'pill-danger';
              }
            })()}
          >
            Priority {this.props.data.priority}
          </div>
        </div>
        <div className="label-pills-container">
          {labels.length > 0 &&
            labels[0] !== '' &&
            labels.map((label, index) => {
              if (label !== '')
                return <span id="label-pill" key={index}>{label}</span>;
            })}
        </div>
      </div>
    );
  }
}

Todo.propTypes = {
  data: PropTypes.object.isRequired,
  wrapperStateHandler: PropTypes.func.isRequired,
};

export default Todo;
