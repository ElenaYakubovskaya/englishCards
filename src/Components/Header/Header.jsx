import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Styles = styled.div`
  .header {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    color: blueviolet;
    padding-top: 10px;
    width: 100%;
    font: italic small-caps bold 20px/2 cursive;
    margin-bottom: 50px;
  }

  .header-name {
    margin-top: 20px;
    text-align: center;
    color: #800080;
  }

  .button-Sign_in {
    margin: 15px;
    margin-left: 40px;
    padding: 5px 15px;
    height: 40px;
    text-decoration: none;
    border: 1px solid white;
    color: blueviolet;
    font: italic small-caps bold 15px/2 cursive;
    cursor: pointer;
    outline: none;
    border-radius: 1em;
  }

  .button-theme {
    cursor: pointer;
    margin-top: 10px;
    height: 35px;
    margin-right: 40px;
    box-sizing: border-box;
    --glow-color: rgb(217, 176, 255);
    --glow-spread-color: rgba(255, 255, 255);
    --enhanced-glow-color: rgb(231, 206, 255);
    --btn-color: rgb(255, 255, 255);
    border: 0.2em solid var(--glow-color);
    padding: 0.2em 1em;
    color: rgb(164, 101, 223);
    font: italic small-caps bold 12px/2 cursive;

    background-color: var(--btn-color);
    border-radius: 1em;
    outline: none;
    box-shadow: 0 0 1em 0.5em var(--glow-color),
      0 0 4em 1em var(--glow-spread-color),
      inset 0 0 0.9em 0.5em var(--glow-color);
    position: relative;
    transition: all 0.3s;
  }

  .button-theme:hover {
    color: rgba(255, 255, 255);
    background-color: var(--glow-color);
    box-shadow: 0 0 1em 0.25em var(--glow-color),
      0 0 4em 2em var(--glow-spread-color),
      inset 0 0 0.75em 0.25em var(--glow-color);
  }

  .button-theme:active {
    box-shadow: 0 0 0.6em 0.25em var(--glow-color),
      0 0 2.5em 2em var(--glow-spread-color),
      inset 0 0 0.5em 0.25em var(--glow-color);
  }
`;

class Header extends Component {
  render() {
    return (
      <Styles>
        <div className="header">
          <Link to={'Login'} className="button-Sign_in">
            {' '}
            Sign in
          </Link>
          <h2 className="header-name">English for IT_</h2>
          <button className="button-theme">switch theme</button>
        </div>
      </Styles>
    );
  }
}
export default Header;
