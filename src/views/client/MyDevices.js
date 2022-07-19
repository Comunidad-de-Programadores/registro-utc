import React, { useState } from 'react';
import Swal from 'sweetalert2';

// -marca del dispositivo
// - modelo del dispositivo
// -matricula propia de cada dispositivo
const devices = [
  {
    id: 1,
    name: 'Dispositivo 1',
    brand: 'HP',
    model: 'ProBook',
    serialNumber: '123456789',
  },
  {
    id: 2,
    name: 'Dispositivo 2',
    brand: 'Dell',
    model: 'Inspiron',
    serialNumber: '987654321',
  },
  {
    id: 3,
    name: 'Dispositivo 3',
    brand: 'Lenovo',
    model: 'Thinkpad',
    serialNumber: '987654321',
  },
  {
    id: 4,
    name: 'Dispositivo 4',
    brand: 'HP',
    model: 'ProBook',
    serialNumber: '123456789',
  },
];

export const MyDevices = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  const handleDelete = () => {
    Swal.fire({
      title: '¿Estas seguro?',
      text: 'No podras recuperar este registro!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.value) {
        Swal.fire('Eliminado!', 'El registro ha sido eliminado.', 'success');
      }
    });
  };

  const handleEdit = () => {
    Swal.fire({
      title: 'Editar Dispositivo',
      html: `
        <div class="form-group">
          <label for="name">Nombre</label>
          <input type="text" class="form-control" id="name" placeholder="Nombre">
          <label for="brand">Marca</label>
          <input type="text" class="form-control" id="brand" placeholder="Marca">
          <label for="model">Modelo</label>
          <input type="text" class="form-control" id="model" placeholder="Modelo">
          <label for="serialNumber">Matricula</label>
          <input type="text" class="form-control" id="serialNumber" placeholder="Matricula">
        </div>
      `,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Editar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.value) {
        Swal.fire('Editado!', 'El registro ha sido editado.', 'success');
      }
    });
  };

  const handleAdd = () => {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Dispositivo agregado',
      showConfirmButton: false,
      timer: 1500,
    });

    setToggle(!toggle);
  };

  return (
    <div className=''>
      <h1 className='text-center mb-4'>Mis Dispositivos</h1>

      <div className='d-flex justify-content-end my-3'>
        <button className={toggle ? 'btn btn-warning' : 'btn btn-success'} onClick={handleClick}>
          {toggle ? 'Ocultar' : 'Agregar nuevo dispositivo'}
        </button>
      </div>

      <div className={`${toggle ? 'd-block my-3 border p-3' : 'd-none my-3 border p-3'}`}>
        <form>
          <div class='mb-3'>
            <input type='text' class='form-control' placeholder='Nombre del dispositivo' />
          </div>
          <div class='mb-3'>
            <input type='text' class='form-control' placeholder='Marca del dispositivo' />
          </div>

          <div class='mb-3'>
            <input type='text' class='form-control' placeholder='matricula' />
          </div>
          <div class='mb-3'>
            <input
              type='file'
              class='form-control'
              id='inputGroupFile04'
              aria-describedby='inputGroupFileAddon04'
              aria-label='Upload'
            />
          </div>
          <button type='submit' class='btn btn-primary' onClick={handleAdd}>
            Agregar
          </button>
        </form>
      </div>
      {/* div with scroll */}
      {devices.map((device) => (
        <div className='card mb-3 shadow-lg p-3' key={device.id}>
          <div className='card-body'>
            <div className='d-flex justify-content-end align-items-end mb-3'>
              <button className='btn btn-primary mx-3' onClick={handleEdit}>
                Editar
              </button>
              <button className='btn btn-danger mx-3' onClick={handleDelete}>
                Eliminar
              </button>
            </div>
            <h5 className='card-title'>{device.name}</h5>
            <p className='card-text'>
              <span className='font-weight-bold'>Marca:</span> {device.brand}
              <br />
              <span className='font-weight-bold'>Modelo:</span> {device.model}
              <br />
              <span className='font-weight-bold'>No. de serie:</span> {device.serialNumber}
            </p>
          </div>
          {/* button for edit and delete */}
        </div>
      ))}
    </div>
  );
};
