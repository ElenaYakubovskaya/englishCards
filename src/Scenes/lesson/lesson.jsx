import React, { Component } from 'react';
import CardLesson from '../CardLesson/CardLesson';
import styled from 'styled-components';

const Styles = styled.div`
  .lesson {
  }
`;

class Lesson extends Component {
  render() {
    return (
      <Styles>
        <div className="lesson"></div>
      </Styles>
    );
  }
}

export default Lesson;
