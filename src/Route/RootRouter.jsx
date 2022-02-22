import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import CardLesson from '../Scenes/CardLesson/CardLesson';
import MainLayout from '../Layouts/MainLayout/MainLayout';
import Welcome from '../Components/Welcom/Welcom';
const RootRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Welcome />} />
      <Route exact path="/" element={<MainLayout />} />
      <Route path="/cardLesson" element={<CardLesson />} />
    </Routes>
  );
};

export default RootRouter;
