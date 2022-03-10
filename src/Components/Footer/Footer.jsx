import React, { Component } from 'react';

import styled from 'styled-components';

const Styles = styled.div`
  .footer {
    box-sizing: border-box;
    display: flex;
    justify-content: flex-end;
    max-width: 100%;
    text-align: right;
    background-color: rgb(253, 237, 217);
    padding: 2px;
    padding-right: 50px;

    font: italic small-caps bold 10px/2 cursive;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
  }

  .footer-text {
    margin: 0;
    margin-right: 60px;
  }
`;

class Footer extends Component {
  render() {
    return (
      <Styles>
        <div className="footer">
          <h2 className="footer-text">Elena_Yakubovskaya</h2>
        </div>
      </Styles>
    );
  }
}
export default Footer;
