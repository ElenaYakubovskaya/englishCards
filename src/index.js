import React, { Children } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
const Styles = styled.div`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;

const app = (
  <BrowserRouter>
    <Styles>
      <App />
    </Styles>
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));
