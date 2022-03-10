import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CardLesson from '../Scenes/CardLesson/CardLesson';
import MainLayout from '../Layouts/MainLayout/MainLayout';
import Welcome from '../Components/Welcom/Welcom';
import Login from '../Scenes/Login/Login';
import Lesson from '../Scenes/Lesson/Lesson';

const RootRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="cardLesson/Lesson" element={<Lesson />} />
        <Route path="login" element={<Login />} />
        <Route path="cardLesson/*" element={<CardLesson />} />
        <Route index element={<Welcome />} />
      </Route>
    </Routes>
  );
};

export default RootRouter;
