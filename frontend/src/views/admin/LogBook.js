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
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
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
        autoComplete='off'>
        <FormControl>
          <InputLabel htmlFor='age-simple'>Plantel</InputLabel>
          <Select
            // value={age}
            // onChange={(e: SelectChangeEvent) => setAge(e.target.value)}
            input={<Input name='age' id='age-simple' />}>
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
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align='right'>Calories</TableCell>
              <TableCell align='right'>Fat&nbsp;(g)</TableCell>
              <TableCell align='right'>Carbs&nbsp;(g)</TableCell>
              <TableCell align='right'>Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component='th' scope='row'>
                  {row.name}
                </TableCell>
                <TableCell align='right'>{row.calories}</TableCell>
                <TableCell align='right'>{row.fat}</TableCell>
                <TableCell align='right'>{row.carbs}</TableCell>
                <TableCell align='right'>{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
