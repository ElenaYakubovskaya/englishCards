import React, { Component } from 'react';

import styled from 'styled-components';

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
        <RootRouter />
      </Styles>
    );
  }
}

export default App;
