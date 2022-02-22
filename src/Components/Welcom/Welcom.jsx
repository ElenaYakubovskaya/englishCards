import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const Styles = styled.div`
  .first_window {
    height: 85vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: visible;
    box-sizing: border-box;
    border: 1px solid white;
    padding: 20px;
    border-radius: 10px;
  }
  .greating {
    color: #6f1abd;
    font: italic small-caps bold 40px/2 cursive;
    text-decoration: none;
  }

  .link-auth {
    cursor: pointer;
    margin: 15px;
    color: #5c2391;
    font: small-caps bold 25px/2 cursive;
    text-decoration: none;
    position: relative;

    &:hover {
      cursor: pointer;
      transform: scale(1.1);
    }
  }
  .link-lessons {
    cursor: pointer;
    margin: 15px;
    color: #5c2391;
    font: small-caps bold 30px/2 cursive;
    text-decoration: none;
    position: relative;

    &:hover {
      cursor: pointer;
      transform: scale(1.1);
    }
  }
`;

const Welcome = () => {
  return (
    <Styles>
      <div className="first_window">
        <h3 className="greating">Hi, there!</h3>
        <Link to={'/cardLesson'}>
          <p className="link-lessons">Go to the list of lessons &#8594;</p>
        </Link>
        <p className="link-auth">Sign in</p>
      </div>
    </Styles>
  );
};

export default Welcome;
