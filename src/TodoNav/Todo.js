import React from 'react';
// import PropTypes from 'prop-types';

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
    this.setState(
      () => ({ editTodo: !this.state.editTodo })
    );
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
      <div>
        <div onClick={this.handleCompletionToggle}>
          {this.props.data.completed
            ? <i className="fa fa-check-square" />
            : <i className="fa fa-square-o" />}
        </div>
        {this.state.editTodo === false
          ? <div onDoubleClick={this.toggleEditing}>
              {this.state.editingValue}
            </div>
          : <input
              onChange={this.handleEditChange}
              onKeyDown={this.shouldEditComplete}
              value={this.state.editingValue}
              autoFocus
              onBlur={this.toggleEditing}
            />}
        <div id="priority-label">{this.props.data.priority}</div>
        {labels.map((label, index) => (
          <div id="label" key={index}>{label}</div>
        ))}
        <div onClick={this.handleRemoval}><i className="fa fa-remove" /></div>
      </div>
    );
  }
}

Todo.propTypes = {};
Todo.defaultProps = {};

export default Todo;
