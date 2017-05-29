import React from 'react';
// import PropTypes from 'prop-types';

class Todo extends React.Component {

	constructor(props){
		super(props);
		this.handleCompletionToggle = this.handleCompletionToggle.bind(this);
		this.handleRemoval = this.handleRemoval.bind(this);
	}

	handleCompletionToggle(){
		this.props.wrapperStateHandler(this.props.data.id,'toggleCompletion');
		console.log('sent to parent');
	}

	handleRemoval(){
		this.props.wrapperStateHandler(this.props.data.id,'remove');
		console.log('sent to parent');
	}

	render() {
		const labels = this.props.data.labels.split(/\s+|,/);
		return (
			<div>
				<div onClick={this.handleCompletionToggle}>
					{ this.props.data.completed ? <i className="fa fa-check-square" /> : <i className="fa fa-square-o" />}
				</div>
				<div>{this.props.data.value}</div>
				<div id="priority-label">{this.props.data.priority}</div>
				{labels.map( (label,index) => <div id="label" key={index}>{label}</div> )}
				<div onClick={this.handleRemoval}><i className="fa fa-remove"></i></div>
			</div>
		);
	}
}

Todo.propTypes    = {};
Todo.defaultProps = {};

export default Todo;
