import React from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {
	Button,
	Input,
	InputAdornment,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	TextField,
} from '@mui/material';
import { Box } from '@mui/system';
import Paper from '@mui/material/Paper';

function createData(name, equipo, origenDestino, fecha) {
	return { name, equipo, origenDestino, fecha };
}

const rows = [
	createData('13:00', 'Juan carlos', 'mackBook', 'Niza'),
	createData('13:00', 'Juan carlos', 'mackBook', 'Niza'),
];

export const LogBook = () => {
	const [age, setAge] = React.useState('');

	return (
		<div>
			<h2 className='text-center mb-5'>Bitacora de Registros</h2>
			<Box
				component='form'
				sx={{
					'& > :not(style)': { m: 1, width: '25ch', marginBottom: '4rem' },
				}}
				noValidate
				autoComplete='off'
			>
				<FormControl>
					<InputLabel htmlFor='age-simple'>Plantel</InputLabel>
					<Select
						// value={age}
						// onChange={(e: SelectChangeEvent) => setAge(e.target.value)}
						input={<Input name='age' id='age-simple' />}
					>
						<MenuItem value=' '>
							<em>None</em>
						</MenuItem>
						<MenuItem value={10}>Niza</MenuItem>
						<MenuItem value={20}>Hr</MenuItem>
						<MenuItem value={30}>Londres</MenuItem>
					</Select>
				</FormControl>
				<TextField
					id='date'
					label='Fecha'
					type='date'
					defaultValue='2017-05-24'
					InputLabelProps={{
						shrink: true,
					}}
				/>
				<Button variant='contained' color='primary'>
					Buscar
				</Button>
			</Box>

			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label='simple table'>
					<TableHead>
						<TableRow>
							<TableCell>Hora</TableCell>
							<TableCell align='center'>Nombre del Docente</TableCell>
							<TableCell align='center'>Dispositivo</TableCell>
							<TableCell align='center'>Plantel</TableCell>
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
								<TableCell align='center'>{row.equipo}</TableCell>
								<TableCell align='center'>{row.origenDestino}</TableCell>
								<TableCell align='center'>{row.fecha}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};
