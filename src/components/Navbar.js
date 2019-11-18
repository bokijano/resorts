import React, { Component } from "react";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./navbar.css";

export default class Navbar extends Component {
  state = {
    isOpen: false
  };
  handleToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <div className="logo">
              <Link to="/">
                <span className="first">Mountain</span>
                <span className="second">Resorts</span>
              </Link>
            </div>

            <button type="button" className="nav-btn">
              <FaAlignRight className="nav-icon" onClick={this.handleToggle} />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link className="active" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/rooms">Kopaonik</Link>
            </li>
            <li>
              <Link to="/zlatibor">Zlatibor</Link>
            </li>
            <li>
              <Link to="/oldMountain">Old Mountain</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
