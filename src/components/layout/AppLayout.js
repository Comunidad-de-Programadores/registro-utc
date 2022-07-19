import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { routerPaths } from '../../constants/paths';

import home from '../../assets/house-door-fill.svg';
import user from '../../assets/person-fill.svg';
import list from '../../assets/list-task.svg';
import menu from '../../assets/list.svg';
import back from '../../assets/arrow-left-short.svg';

export const AppLayout = ({ children }) => {
  const navegate = useNavigate();

  return (
    <>
      <header style={styles.header}>
        <img src={back} alt='back' className='mx-3' onClick={() => navegate(-1)} />
        <h1 style={styles.title}>Registro Utc</h1>
      </header>
      <main style={styles.main}>{children}</main>
      <nav
        className='border-2 fixed-bottom mx-4 shadow-lg d-flex justify-content-around align-items-center'
        style={styles.nav}>
        <Link to='/docente/home'>
          <img src={home} alt='home' style={styles.icon} />
        </Link>

        <Link to='/docente/my-devices'>
          <img src={list} alt='list' style={styles.icon} />
        </Link>

        <Link to='/docente/menu'>
          <img src={menu} alt='user' style={styles.icon} />
        </Link>
      </nav>
    </>
  );
};

const styles = {
  header: {
    height: '50px',
    backgroundColor: '#ff4100',
    padding: '10px',
    display: 'flex',
  },
  title: {
    fontSize: '20px',
    color: '#fff',
    fontWeight: 'bold',
  },
  nav: {
    backgroundColor: '#fff',
    height: '40px',
  },
  children: {
    backgroundColor: '#fff',
    height: 'calc(100vh - 100px)',
  },
  main: {
    backgroundColor: '#F0F3F7',
    height: 'calc(100vh - 50px)',
    padding: '1rem',
    with: '100%',
    overflow: 'auto',
    paddingBottom: '4rem',
  },
};
