import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from '../Scenes/Login/Login';

const LoginRouter = () => {
  return (
    <Routes>
      <Route path={'/login'} element={<Login />} />
    </Routes>
  );
};

export default LoginRouter;
