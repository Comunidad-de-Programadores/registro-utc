import React from 'react';
import { useNavigate } from 'react-router-dom';

import person from '../../assets/person-fill.svg';
import lock from '../../assets/lock-fill.svg';
import logout from '../../assets/power.svg';
import history from '../../assets/calendar-date.svg';

export const Menu = () => {
  const navegate = useNavigate();

  const handleLogout = () => navegate('/auth/login');
  const handleHistory = () => navegate('/docente/record-history');
  const handlePolicy = () => navegate('/docente/privacy-policies');

  return (
    <div>
      <h1 className='text-center'>Menu</h1>
      <h3 className='my-4'>
        <img src={person} alt='person' className='mx-3' />
        Fulanito de tal
      </h3>

      <h4 className='my-3'>Acerca de</h4>
      <div className='w-100 alert alert-light' onClick={handlePolicy}>
        <img src={lock} alt='lock' className='mx-3' />
        politica de privacidad
      </div>

      <h4 className='my-3'> Mi cuenta</h4>
      <div className='alert alert-light w-100' onClick={handleHistory}>
        <img src={history} alt='history' className='mx-3' />
        historial de registros
      </div>
      <div className='alert alert-light w-100 text-start text-danger' onClick={handleLogout}>
        <img src={logout} alt='logout' className='mx-3' />
        cerrar sesion
      </div>
    </div>
  );
};
