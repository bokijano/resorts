import React, { Component } from "react";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./navbar.css";
import { ProductConsumer } from "./../Context";

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
      <ProductConsumer>
        {value => (
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
                  <FaAlignRight
                    className="nav-icon"
                    onClick={value.handleToggle}
                  />
                </button>
              </div>

              <ul className={value.isOpen ? "nav-links show-nav" : "nav-links"}>
                <li>
                  <Link
                    className="active"
                    to="/"
                    onClick={value.displayOtherPage}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/kopaonik" onClick={value.displayOtherPage}>
                    Kopaonik
                  </Link>
                </li>
                <li>
                  <Link to="/zlatibor" onClick={value.displayOtherPage}>
                    Zlatibor
                  </Link>
                </li>
                <li>
                  <Link to="/staraPlanina" onClick={value.displayOtherPage}>
                    Stara Planina
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        )}
      </ProductConsumer>
    );
  }
}
