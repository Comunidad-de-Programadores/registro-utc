import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Button,
} from '@mui/material';
import React from 'react';

function createData(name, calories, fat, carbs, protein, options) {
	return { name, calories, fat, carbs, protein, options };
}

const rows = [
	createData(
		'Roberto',
		'Martinez',
		'Perez',
		'personal de seguridad',
		<Button variant='contained' color='primary'>
			Editar
		</Button>,
		<Button variant='contaied' color='primary'>
			Eliminar
		</Button>,
	),
	createData(
		'Roberto',
		'Martinez',
		'Perez',
		'personal de seguridad',
		<Button variant='contained' color='primary'>
			Editar
		</Button>,
		<Button variant='contaied' color='primary'>
			Eliminar
		</Button>,
	),
];

export const UsersManagement = () => {
	return (
		<div>
			<h2 className='text-center mb-5'>Gestión de Usuarios</h2>
			<TableContainer
				component={Paper}
				sx={{ boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2);' }}
			>
				<Table sx={{ minWidth: 650 }} aria-label='simple table'>
					<TableHead>
						<TableRow>
							<TableCell>Nombre</TableCell>
							<TableCell align='right'>Apellido Paterno</TableCell>
							<TableCell align='right'>Apellido Materno</TableCell>
							<TableCell align='right'>Rol</TableCell>
							<TableCell align='right'>Opciones</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map(row => (
							<TableRow
								key={row.name}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell component='th' scope='row'>
									{row.name}
								</TableCell>
								<TableCell align='right'>{row.calories}</TableCell>
								<TableCell align='right'>{row.fat}</TableCell>
								<TableCell align='right'>{row.carbs}</TableCell>
								<TableCell align='right'>{row.protein}</TableCell>
								<TableCell align='right'>{row.options}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};
