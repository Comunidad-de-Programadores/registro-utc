import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import DevicesIcon from '@mui/icons-material/Devices';
import MenuIcon from '@mui/icons-material/Menu';

export const AppLayout = ({ children }) => {
	const navegate = useNavigate();

	const [value, setValue] = useState(0);

	const handleChange = newValue => setValue(newValue);

	return (
		<div className='app'>
			<header style={styles.header}>
				<Button
					onClick={() => {
						navegate(-1);
					}}
				>
					<ArrowBackIcon sx={{ color: 'white' }} />
				</Button>
				<h1 style={styles.title}>Registro Utc</h1>
			</header>
			<main style={styles.main}>{children}</main>
			<BottomNavigation
				showLabels
				sx={{
					width: '330px',
					position: 'fixed',
					bottom: 0,
					marginLeft: 'calc(50% - 165px)',
					marginRight: 'calc(50% - 165px)',
				}}
				value={value}
				onChange={handleChange}
			>
				<BottomNavigationAction
					label='Inicio'
					value='recents'
					icon={<HomeIcon />}
					onClick={() => {
						navegate('/docente/home');
					}}
				/>
				<BottomNavigationAction
					label='Dispositivos'
					value='favorites'
					icon={<DevicesIcon />}
					onClick={() => {
						navegate('/docente/my-devices');
					}}
				/>
				<BottomNavigationAction
					label='Menu'
					value='nearby'
					icon={<MenuIcon />}
					onClick={() => {
						navegate('/docente/menu');
					}}
				/>
			</BottomNavigation>
		</div>
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
