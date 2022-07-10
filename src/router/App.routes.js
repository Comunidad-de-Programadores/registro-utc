import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { AppLayout } from '../components/layout/AppLayout';
// import { LogIn } from '../views/LogIn';

// import { routerPaths } from '../constants/paths';
import { AuthRoutes } from './Auth.routes';
import { DocRoutes } from './Doc.routes';

export const AppRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/auth/*' element={<AuthRoutes />}></Route>
          <Route path='/docente/*' element={<DocRoutes />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
