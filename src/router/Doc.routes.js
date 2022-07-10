import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { AppLayout } from '../components/layout/AppLayout';
import { Home } from '../views/Home';
import { MyDevices } from '../views/MyDevices';
import { MyProfile } from '../views/MyProfile';
export const DocRoutes = () => {
  return (
    <div>
      <AppLayout>
        <Routes>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/my-devices' element={<MyDevices />}></Route>
          <Route path='/my-profile' element={<MyProfile />}></Route>
        </Routes>
      </AppLayout>
    </div>
  );
};
