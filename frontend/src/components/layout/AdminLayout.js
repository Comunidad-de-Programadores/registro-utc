import React from 'react';
import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  Menu,
  MenuItem,
  SubMenu,
} from 'react-pro-sidebar';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepPurple } from '@mui/material/colors';
import PersonIcon from '@mui/icons-material/Person';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import AddIcon from '@mui/icons-material/Add';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';

import { Link, useNavigate } from 'react-router-dom';

import 'react-pro-sidebar/dist/css/styles.css';
import Swal from 'sweetalert2';

export const AdminLayout = ({ children }) => {
  const navegate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: '¿Estás seguro de que quieres cerrar sesión?',
      text: 'Si cierras sesión, no podrás acceder a tu cuenta',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Cerrar sesión',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.value) {
      }
    });
  };

  return (
    <div className='d-flex'>
      <ProSidebar style={styles.ProSidebar}>
        <SidebarHeader>
          <Menu iconShape='square'>
            <MenuItem>
              <Link
                to='/cms/logBook'
                style={{
                  color: 'white',
                  fontSize: '24px',
                  fontWeight: 'bold',
                }}>
                <h3 className='text-center fw-bold'>Registro Utc</h3>
              </Link>
            </MenuItem>
          </Menu>
          <div className='d-flex justify-content-center '>
            <div className='d-block border-dark m-2 p-2'>
              <Stack
                direction='row'
                spacing={2}
                sx={{ justifyContent: 'center', alignItems: 'center', marginBottom: '1rem' }}>
                <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
              </Stack>
              <div className='ml-2'>
                <h5 className='text-white'>Administrador</h5>
                <h6 className='text-white text-center'>user@user.com</h6>
              </div>
            </div>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <Menu iconShape='square'>
            <MenuItem icon={<LibraryBooksIcon color='primary' />}>
              <Link to='/cms/logBook' style={{ color: 'white' }}>
                Bitacora
              </Link>
            </MenuItem>
            <SubMenu title='Gestion de usuarios' icon={<PersonIcon color='success' />}>
              <MenuItem icon={<AddIcon />}>
                <Link to='/cms/new-user' style={{ color: 'white' }}>
                  Alta personal de seguridad
                </Link>
              </MenuItem>
              <MenuItem icon={<PersonSearchIcon />}>
                <Link to='/cms/users-management' style={{ color: 'white' }}>
                  Consultar usuarios
                </Link>
              </MenuItem>
            </SubMenu>
            <MenuItem icon={<NotificationImportantIcon color='secondary' />}>
              <Link to='/cms/notifications' style={{ color: 'white' }}>
                Notificaciones
              </Link>
            </MenuItem>
          </Menu>
        </SidebarContent>
        <SidebarFooter>
          <MenuItem
            icon={<PowerSettingsNewIcon sx={{ color: '#fc2d1f' }} />}
            style={{ margin: '1rem' }}>
            <button className='btn border-0 text-light' onClick={handleLogout}>
              Cerrar sesión
            </button>
          </MenuItem>
        </SidebarFooter>
      </ProSidebar>
      <div style={styles.content}>{children}</div>
    </div>
  );
};

const styles = {
  content: {
    padding: '3rem',
    margin: '0px',
    height: '100%',
    overflow: 'auto',
    width: 'calc(100% - 240px)',
  },
  ProSidebar: {
    height: '100vh',
    width: '240px',
    backgroundColor: 'blue !important',
    color: '#fff',
  },
};
