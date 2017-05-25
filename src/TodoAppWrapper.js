import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import AddNewTodo from "./AddNewTodo";
import TodoNav from "./TodoNav";
import AllContainer from "./AllContainer"
import {
	Route,
	Switch,
	Redirect
} from "react-router-dom";
// import { routeConfig as routes } from "./router";


class TodoAppWrapper extends Component {
	constructor(props){
		super(props);
		this.state = {
			todos:[]
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(newTodo){
		this.setState( () => {
			return {
				todos: this.state.todos.concat(newTodo)
			};
			// as well as persist with local storage
		});

	}
	render() {
		return (
			<div>
				<AddNewTodo handleSubmit={this.handleSubmit}/>
				<TodoNav />
				<div id="tabs-container">
					<Switch>
						<Route path="/" render={ props => {
							return <AllContainer {...props} todos={this.state.todos} />
						} }/>
						<Route path="/pending" component={AllContainer}/>
						<Route path="/completed" component={AllContainer}/>
						<Route path="/priority" component={AllContainer}/>
						<Redirect to="/" />
					</Switch>
				</div>
			</div>
		);
	}
}

TodoAppWrapper.propTypes    = {};
TodoAppWrapper.defaultProps = {};

export default TodoAppWrapper;
