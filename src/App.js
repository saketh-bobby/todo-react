import React from "react";
import TodoBox from "./TodoBox";
import Header from "./NavBar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { routeConfig as routes } from "./router";

import "./App.css";

class App extends React.Component {
	constructor(props){
		super(props);
	}
  render() {
    return (
      <div className="App">
        <Router>
          <div>
						<TodoBox />
            <Header />
	          <Switch>
		          {routes.map((route, index) => {
			          return (
			          	<Route key={index} path={route.path}
			              render={props => (
				              // pass the sub-routes down to keep nesting
				              <route.component {...props}/>
			              )}
			            />
			          );
		          })}
		          <Redirect to="/" />
	          </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
