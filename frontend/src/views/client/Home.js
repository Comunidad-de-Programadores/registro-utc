import React from 'react';

import qrCode from '../../assets/qr-code.svg';

export const Home = () => {
	return (
		<>
			<h1 className='text-center'>Home</h1>
			<div className='p-5'>
				<img src={qrCode} alt='qr code' className='w-100' />
			</div>
			<select className='form-select mb-2' aria-label='Default select example'>
				<option>selecciona un dispositivo</option>
				<option value='1'>One</option>
				<option value='2'>Two</option>
				<option value='3'>Three</option>
			</select>
			<div className='d-flex justify-content-center mb-5'>
				<button className='btn btn-primary'>Generar QR Code</button>
			</div>
			<div className='d-flex justify-content-center align-items-end'>
				<button className='btn btn-danger'>He perdido mi dispositivo</button>
			</div>
		</>
	);
};
