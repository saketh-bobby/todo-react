import React from 'react';
// import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import { routeConfig as routes } from '../router';

const TabbedContainer = (props) => {
	return (
		<div id="tabs-container">
			<Switch>
				{routes.map( (route,index) => {
					return (
						<Route
							key={index}
							exact={route.exact || false}
							path={route.path}
							render={routeProps => (
								<route.component
									{...routeProps}
									todos={props.todos}
									wrapperStateHandler={props.wrapperStateHandler}
								/>
							)}
						/>
					);
				})}
				<Redirect to="/" />
			</Switch>
		</div>
	);
};

TabbedContainer.propTypes    = {};
TabbedContainer.defaultProps = {};

export default TabbedContainer;
