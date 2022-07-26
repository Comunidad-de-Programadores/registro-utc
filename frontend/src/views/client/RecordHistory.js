import React from 'react';

export const RecordHistory = () => {
  return (
    <div>
      <h1 className='text-center'>Historial de registros</h1>

      {/* input of date  */}
      <div className='input-group mb-3'>
        <div className='input-group-prepend'>
          <span className='input-group-text' id='basic-addon1'>
            seleccione una fecha
          </span>
        </div>
        <input
          type='date'
          className='form-control'
          placeholder='Fecha'
          aria-label='Fecha'
          aria-describedby='basic-addon1'
        />
      </div>

      {/* tabla con hora ,modulo, origen y destino */}
      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th scope='col'>Hora</th>
            <th scope='col'>Modulo</th>
            <th scope='col'>Origen</th>
            <th scope='col'>Destino</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>10:00</td>
            <td>1</td>
            <td>A</td>
            <td>B</td>
          </tr>
          <tr>
            <td>10:00</td>
            <td>1</td>
            <td>A</td>
            <td>B</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
