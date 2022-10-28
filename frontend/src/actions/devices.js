import { types } from '../types/types';

export const addDevice = device => ({
	type: types.newDevice,
	payload: device,
});

export const deleteDevice = id => ({
	type: types.deleteDevice,
	payload: id,
});

export const updateDevice = device => ({
	type: types.updateDevice,
	payload: device,
});
