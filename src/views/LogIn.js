import React from 'react';

import { useNavigate } from 'react-router-dom';
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
          <div className='mt-5'>
            <h1 className='text-center mb-5' style={styles.title}>
              Registro Utc
            </h1>
            <img
              src='https://utc.mx/wp-content/themes/utc/assets/images/logo-utc-v01.svg'
              alt='logo'
            />
          </div>
          <div className='inputs mt-5'>
            <button
              className='button w-100 button--microsoft text-white shadow-lg'
              onClick={handleLogin}>
              Login With Microsoft 365
            </button>
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
