import React from "react";
import { NavLink } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <nav>
        <ul>
          <li>
            <NavLink to="/">All</NavLink>
          </li>
          <li>
            <NavLink to="/pending">Pending</NavLink>
          </li>
          <li>
            <NavLink to="/completed">Completed</NavLink>
          </li>
          <li>
            <NavLink to="/priority">Priority</NavLink>
          </li>
          <li>
            <NavLink to="/labels">Labels</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
