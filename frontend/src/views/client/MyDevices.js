import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { DeviceCard } from '../../components/ui/DeviceCard';
import { addDevice, deleteDevice, updateDevice } from '../../actions/devices';
import { useForm } from '../../hooks/useForm';

const initialSate = {
	name: '',
	brand: '',
	model: '',
	serialNumber: '',
};

export const MyDevices = () => {
	const { values, handleInputChange, reset } = useForm(initialSate);
	const [toggle, setToggle] = useState(false);
	const dispatch = useDispatch();
	const { devices } = useSelector(state => state.devices);

	const handleDeleteDevice = id => {
		Swal.fire({
			title: '¿Estás seguro?',
			text: 'No podrás revertir esta acción',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Sí, eliminar',
			cancelButtonText: 'Cancelar',
		}).then(result => {
			if (result.isConfirmed) {
				dispatch(deleteDevice(id));
			}
		});
	};

	const handleUpdateDevice = device => {
		Swal.fire({
			title: 'Editar dispositivo',
			html: `
        <input id="name" class="swal2-input" placeholder="Nombre del dispositivo" value="${device.name}">
        <input id="brand" class="swal2-input" placeholder="Marca" value="${device.brand}">
        <input id="model" class="swal2-input" placeholder="Modelo" value="${device.model}">
        <input id="serialNumber" class="swal2-input" placeholder="Número de serie" value="${device.serialNumber}">
      `,
			focusConfirm: false,
			preConfirm: () => {
				return {
					name: document.getElementById('name').value,
					brand: document.getElementById('brand').value,
					model: document.getElementById('model').value,
					serialNumber: document.getElementById('serialNumber').value,
				};
			},
		}).then(result => {
			if (result.isConfirmed) {
				const updatedDevice = {
					id: device.id,
					name: result.value.name,
					brand: result.value.brand,
					model: result.value.model,
					serialNumber: result.value.serialNumber,
				};
				dispatch(updateDevice(updatedDevice));
			}
		});
	};

	const handleClick = () => {
		setToggle(!toggle);
	};

	const handleAddDevice = e => {
		e.preventDefault();
		const device = {
			id: new Date().getTime(),
			name: values.name,
			brand: values.brand,
			model: values.model,
			serialNumber: values.serialNumber,
		};

		dispatch(addDevice(device));
		reset();
	};

	return (
		<div className=''>
			<h1 className='text-center mb-4'>Mis Dispositivos</h1>

			<div className='d-flex justify-content-end my-3'>
				<button
					className={toggle ? 'btn btn-warning' : 'btn btn-success'}
					onClick={handleClick}
				>
					{toggle ? 'Ocultar' : 'Agregar nuevo dispositivo'}
				</button>
			</div>

			<div className={`${toggle ? 'd-block my-3 border p-3' : 'd-none my-3 border p-3'}`}>
				<form>
					<div class='mb-3'>
						<input
							type='text'
							class='form-control'
							placeholder='Nombre del dispositivo'
							name='name'
							onChange={handleInputChange}
						/>
					</div>
					<div class='mb-3'>
						<input
							type='text'
							class='form-control'
							placeholder='Marca del dispositivo'
							name='model'
							onChange={handleInputChange}
						/>
					</div>
					<div class='mb-3'>
						<input
							type='text'
							class='form-control'
							placeholder='matricula'
							name='serialNumber'
							onChange={handleInputChange}
						/>
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
					<button type='submit' class='btn btn-primary' onClick={handleAddDevice}>
						Agregar nuevo dispositivo
					</button>
				</form>
			</div>
			{/* div with scroll */}
			{devices.map(device => (
				<DeviceCard
					key={device.id}
					device={device}
					handleDelete={() => handleDeleteDevice(device.id)}
					handleEdit={handleUpdateDevice}
				/>
			))}
		</div>
	);
};
