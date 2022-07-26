import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { SignIn } from '../../views/admin/Login';
import { AdminRoutesUser } from './Admin.routes';

export const AdminRoutes = () => {
  return (
    <Routes>
      <Route path='/singIn' element={<SignIn />}></Route>
      <Route path='/*' element={<SignIn />}></Route>
    </Routes>
  );
};
