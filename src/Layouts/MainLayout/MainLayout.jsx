import React from 'react';
import CardLesson from '../../Components/CardLesson/CardLesson';

class MainLayout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      headerText: 'English cards for Starter',
      footerText: 'footer',
    };
    this.counter = 0;
  }
  changeText = () => {
    this.setState({ headerText: 'New header' });
  };

  componentDidMount() {
    this.intervalID = setInterval(() => {
      this.counter++;
      this.setState({ headerText: `New header ${this.counter}` });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {
    return (
      <div className={'layout'}>
        <div className={'header'}>{this.state.headerText}</div>
        <button onClick={this.changeText}>Click Me!</button>
        <CardLesson className={'render-me'} />
        <div className={'footer'}>{this.state.footerText}</div>
      </div>
    );
  }
}

export default MainLayout;
