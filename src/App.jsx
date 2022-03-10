import React, { Component } from 'react';

import styled from 'styled-components';

import RootRouter from './Route/RootRouter';

const Styles = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
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
