import React from "react";
import TodoAppWrapper from './TodoAppWrapper/TodoAppWrapper';
import {
  BrowserRouter as Router,
} from "react-router-dom";


import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
						<TodoAppWrapper/>
        </Router>
      </div>
    );
  }
}

export default App;
