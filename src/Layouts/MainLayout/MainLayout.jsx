import React, { Component } from 'react';

import styled from 'styled-components';

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

import { Link } from 'react-router-dom';

const Styles = styled.div`
  .mainLayout {
    margin: 0;
    padding: 0;
    display: block;
    box-shadow: 20px 20px 50px white inset;
    flex-grow: 1;
    width: 100%;
    background: linear-gradient(90deg, #dcbddf, 30%, #fceef7 70%);

    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    overflow: auto;
  }
  .mainLayout-link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font: italic small-caps bold 40px/2 cursive;
    color: #000000bb;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;

class MainLayout extends Component {
  render() {
    return (
      <Styles>
        <div className="mainLayout">
          <Header name="white" />
          <Link to="/cardLesson" className="mainLayout-link">
            Go to the list of lessons &#10230;
          </Link>
          <Footer />
        </div>
      </Styles>
    );
  }
}

export default MainLayout;
