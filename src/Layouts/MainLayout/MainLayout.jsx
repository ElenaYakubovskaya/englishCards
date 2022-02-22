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
  
  }
`;

class MainLayout extends Component {
  render() {
    return (
      <Styles>
        <div className="mainLayout">
          <Header name="switch theme" />
          <main>{this.props.children}</main>
          <Footer />
        </div>
      </Styles>
    );
  }
}

export default MainLayout;
