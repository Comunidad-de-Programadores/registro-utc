import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AdminLayout } from '../../components/layout/AdminLayout';
import { LogBook } from '../../views/admin/LogBook';

export const AdminRoutesUser = () => {
  return (
    <AdminLayout>
      <Routes>
        <Route path='/logBook' element={<LogBook />}></Route>
      </Routes>
    </AdminLayout>
  );
};
