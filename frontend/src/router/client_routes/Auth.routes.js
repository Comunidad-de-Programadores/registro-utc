import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LogIn } from '../../views/client/LogIn';

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path='/login' element={<LogIn />}></Route>
      <Route path='*' element={<LogIn />}></Route>
    </Routes>
  );
};
