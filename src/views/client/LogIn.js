import React from 'react';

import { useNavigate } from 'react-router-dom';
import { LoginMicrosoft } from '../../components/ui/LoginMicrosoft';
export const LogIn = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log('login');
    navigate('/docente/home');
  };
  return (
    <div>
      <div className='app'>
        <div className='bg'></div>
        <div className='p-2'>
          <h1 className='text-center mb-5' style={styles.title}>
            Registro Utc
          </h1>
          <img
            src='https://utc.mx/wp-content/themes/utc/assets/images/logo-utc-v01.svg'
            alt='logo'
          />

          <div className='inputs'>
            <LoginMicrosoft handleLogin={handleLogin} />
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#ff6300',
  },
};
