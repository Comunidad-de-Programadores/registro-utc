import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { AppLayout } from '../../components/layout/AppLayout';
import { Home } from '../../views/client/Home';
import { MyDevices } from '../../views/client/MyDevices';
import { Menu } from '../../views/client/Menu';
import { PrivacyPolicies } from '../../views/client/PrivacyPolicies';
import { RecordHistory } from '../../views/client/RecordHistory';
export const DocRoutes = () => {
  return (
    <AppLayout>
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/my-devices' element={<MyDevices />}></Route>
        <Route path='/menu' element={<Menu />}></Route>
        <Route path='/privacy-policies' element={<PrivacyPolicies />}></Route>
        <Route path='/record-history' element={<RecordHistory />}></Route>
      </Routes>
    </AppLayout>
  );
};
