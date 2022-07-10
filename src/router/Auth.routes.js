import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LogIn } from '../views/LogIn';

export const AuthRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<LogIn />}></Route>
      </Routes>
    </div>
  );
};
