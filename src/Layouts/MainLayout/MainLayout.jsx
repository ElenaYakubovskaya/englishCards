import React, { Component } from 'react';
import CardLesson from '../../Components/CardLesson/CardLesson';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import './MainLayout.css';

class MainLayout extends Component {
  render() {
    return (
      <div className="mainLayout">
        <Header />
        <CardLesson />
        <Footer />
      </div>
    );
  }
}

export default MainLayout;
