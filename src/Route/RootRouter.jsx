import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CardLesson from '../Scenes/CardLesson/CardLesson';
import MainLayout from '../Layouts/MainLayout/MainLayout';

const RootRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} />
      <Route path="/cardLesson" element={<CardLesson />} />
    </Routes>
  );
};

export default RootRouter;
