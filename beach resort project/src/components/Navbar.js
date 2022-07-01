import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../public/images/logo.svg";
import { FaAlignRight } from "react-icons/fa";

class Navbar extends React.Component {
  state = { isOpen: false };
  // initial states
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  // helper function
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <Logo />
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
