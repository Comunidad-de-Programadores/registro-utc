import React from 'react';
import { Link } from 'react-router-dom';

import { routerPaths } from '../../constants/paths';

import home from '../../assets/house-door-fill.svg';
import user from '../../assets/person-fill.svg';
import list from '../../assets/list-task.svg';

export const AppLayout = ({ children }) => {
  return (
    <div>
      <div className='main'>
        <header className='p-3' style={styles.header}>
          <h1 style={styles.title}>Registro UTC</h1>
        </header>
        <div className='p-2'>{children}</div>
        <div className='nav'>
          <div className='nav-slot bg-white '>
            <Link to={routerPaths.home} className='nav-link active'>
              <img src={home} alt='home' className='mb-3' />
            </Link>
          </div>

          <div className='nav-slot bg-white'></div>
          <div className='nav-slot bg-white'>
            <Link to={routerPaths.myDevices} className='nav-link'>
              <img src={list} alt='user' className='mb-3' />
            </Link>
          </div>
          <div className='nav-slot bg-white '></div>
          <div className='nav-slot bg-white '>
            <Link to={routerPaths.myProfile} className='nav-link'>
              <img src={user} alt='user' className='mb-3' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'white',
  },
  header: {
    backgroundColor: '#ff6300',
    borderBottom: '1px solid #e5e5e5',
  },
};
