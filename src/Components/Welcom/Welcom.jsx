import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const Styles = styled.div`
  .first_window {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 1px solid white;
    padding: 20px;

    margin-top: 200px;
  }
  .greating {
    color: #6f1abd;
    font: italic small-caps bold 40px/2 cursive;
    text-decoration: none;
  }

  .link-auth {
    border: 1px solid #6f1abd;
    border-radius: 10px;
    cursor: pointer;
    padding: 0 20px;
    margin: 15px;
    color: #5c2391;
    font: small-caps bold 25px/2 cursive;
    text-decoration: none;
    position: relative;

    &:hover {
      cursor: pointer;
      transform: scale(1.1);
      text-decoration: none;
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
        <Link to={'cardLesson/*'}>
          <p className="link-lessons">Go to the list of lessons &#8594;</p>
        </Link>
        <Link to={'Login'} className="link-auth">
          Sign in
        </Link>
      </div>
    </Styles>
  );
};

export default Welcome;
