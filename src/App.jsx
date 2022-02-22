import React, { Component } from 'react';

import styled from 'styled-components';
import MainLayout from './Layouts/MainLayout/MainLayout';

import RootRouter from './Route/RootRouter';

const Styles = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
`;

class App extends Component {
  render() {
    return (
      <Styles>
        <MainLayout>
          <RootRouter />
        </MainLayout>
      </Styles>
    );
  }
}

export default App;
