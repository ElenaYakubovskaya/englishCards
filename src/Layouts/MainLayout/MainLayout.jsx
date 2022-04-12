import React, { Component } from 'react';

import styled from 'styled-components';

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Styles = styled.div`
  .mainLayout {
    box-sizing: border-box;
    overflow: auto;
    margin: 50;
    padding: 0;
    display: block;
    background: linear-gradient(90deg, #dcbddf, 30%, #fceef7 70%);
    flex-grow: 1;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
  }
`;

class MainLayout extends Component {
  render() {
    return (
      <>
        <Styles>
          <div className="mainLayout">
            <Header />
            <Outlet />
            <Footer />
          </div>
        </Styles>
      </>
    );
  }
}

export default MainLayout;
