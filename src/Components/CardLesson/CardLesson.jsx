import React from 'react';

class CardLesson extends React.PureComponent {
  render() {
    return (
      <div className={'cardLesson'}>
        <div className={'header'}>{this.props.cardName}</div>

        <div className={'footer'}>{this.props.cardDescription}</div>
      </div>
    );
  }
}

export default CardLesson;
