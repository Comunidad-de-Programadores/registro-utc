import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AdminLayout } from '../../components/layout/AdminLayout';
import { LogBook } from '../../views/admin/LogBook';
import { NewUser } from '../../views/admin/NewUser';
import { Notifications } from '../../views/admin/Notifications';
import { UsersManagement } from '../../views/admin/UsersManagement';

export const AdminRoutesUser = () => {
  return (
    <AdminLayout>
      <Routes>
        <Route path='/logBook' element={<LogBook />}></Route>
        <Route path='/users-management' element={<UsersManagement />}></Route>
        <Route path='/new-user' element={<NewUser />}></Route>
        <Route path='/notifications' element={<Notifications />}></Route>
        <Route path='/*' element={<LogBook />}></Route>
      </Routes>
    </AdminLayout>
  );
};
