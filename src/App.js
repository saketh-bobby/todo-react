import React from "react";
import TodoAppWrapper from './TodoAppWrapper';
import {
  BrowserRouter as Router,
} from "react-router-dom";


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
						<TodoAppWrapper/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
