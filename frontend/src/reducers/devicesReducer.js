import { types } from '../types/types';

const initialState = {
	devices: [],
};

export const devicesReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.newDevice:
			return {
				...state,
				devices: [...state.devices, action.payload],
			};
		case types.deleteDevice:
			return {
				...state,
				devices: state.devices.filter(device => device.id !== action.payload),
			};
		case types.updateDevice:
			return {
				...state,
				devices: state.devices.map(device =>
					device.id === action.payload.id ? action.payload : device,
				),
			};
		default:
			return state;
	}
};
