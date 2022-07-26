import React from 'react';

import { Box, Button, FormControl, Input, InputLabel, Select, TextField } from '@mui/material';
import { MenuItem } from 'react-pro-sidebar';

export const NewUser = () => {
  return (
    <Box display='flex' justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
      <h2 className='text-center mb-5'>Nuevo Usuario de seguridad</h2>
      <Box
        component='form'
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch', marginBottom: '2rem' },
        }}
        noValidate
        autoComplete='off'>
        <div>
          <TextField id='outlined-multiline-flexible' label='Nombre' placeholder='nombre' />
          <TextField
            id='outlined-textarea'
            label='Apellido materno'
            placeholder='apellido materno'
          />
        </div>
        <div>
          <TextField label='Apellido Paterno' placeholder='apellido paterno' />
          <TextField label='Nombre de Usuario' placeholder='usuario' />
        </div>
        <div>
          <TextField
            id='outlined-adornment-password'
            type='password'
            label='Contraseña'
            placeholder='contraseña'
          />
          <TextField
            id='outlined-adornment-password'
            type='password'
            label='Confirmar contraseña'
            placeholder='confirmar contraseña'
          />
        </div>
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
        </Box>

        <Button variant='contained' color='primary' type='submit'>
          Guardar
        </Button>
      </Box>
    </Box>
  );
};
