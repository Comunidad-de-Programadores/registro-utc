import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const Notifications = () => {
	return (
		<>
			<h2 className='text-center mb-5'>Notificaciones</h2>
			<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
				<ListItem alignItems='flex-start'>
					<ListItemAvatar>
						<Avatar alt='Aemy Sharp' src='/static/images/avatar/1.jpg' />
					</ListItemAvatar>
					<ListItemText
						primary='Alex Montes de Oca'
						secondary={<React.Fragment>{'ha perdiddo su dispositivo'}</React.Fragment>}
					/>
					<Button
						variant='contained'
						color='primary'
						sx={{ marginLeft: 'auto', witdh: '50%', height: '50px' }}
					>
						Ver mas detalles
					</Button>
				</ListItem>
				<Divider variant='inset' component='li' />
				<ListItem alignItems='flex-start'>
					<ListItemAvatar>
						<Avatar alt='Aemy Sharp' src='/static/images/avatar/1.jpg' />
					</ListItemAvatar>
					<ListItemText
						primary='Alex Montes de Oca'
						secondary={<React.Fragment>{'ha perdiddo su dispositivo'}</React.Fragment>}
					/>
					<Button
						variant='contained'
						color='primary'
						sx={{ marginLeft: 'auto', witdh: '50%', height: '50px' }}
					>
						Ver mas detalles
					</Button>
				</ListItem>
				<Divider variant='inset' component='li' />
				<ListItem alignItems='flex-start'>
					<ListItemAvatar>
						<Avatar alt='Aemy Sharp' src='/static/images/avatar/1.jpg' />
					</ListItemAvatar>
					<ListItemText
						primary='Alex Montes de Oca'
						secondary={<React.Fragment>{'ha perdiddo su dispositivo'}</React.Fragment>}
					/>
					<Button
						variant='contained'
						color='primary'
						sx={{ marginLeft: 'auto', witdh: '50%', height: '50px' }}
					>
						Ver mas detalles
					</Button>
				</ListItem>
			</List>
		</>
	);
};
