import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NotFound } from '../views/NotFound';
// import { AppLayout } from '../components/layout/AppLayout';
// import { LogIn } from '../views/LogIn';

// import { routerPaths } from '../constants/paths';
import { AuthRoutes } from './client_routes/Auth.routes';
import { DocRoutes } from './client_routes/Doc.routes';
import { AdminRoutes } from './admin_routes/AdminAuth.routes';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/auth/*' element={<AuthRoutes />}></Route>
        <Route path='/docente/*' element={<DocRoutes />}></Route>
        <Route path='/admin/*' element={<AdminRoutes />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
