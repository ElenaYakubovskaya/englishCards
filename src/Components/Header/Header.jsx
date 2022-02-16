import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-icon">
          <i id="icon-menu" className="fa-solid fa-bars"></i>
        </div>
        <button className="header-theme">light/black</button>
        <h2 className="header-name">English for IT_</h2>
      </div>
    );
  }
}
export default Header;
