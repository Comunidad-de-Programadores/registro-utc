import { DEVELOPMENT } from './enviroments.constants';

export const REACT_APP_CLIENT_ID =
	process.env.NODE_ENV === DEVELOPMENT
		? process.env.REACT_APP_CLIENT_ID
		: window.REACT_APP_CLIENT_ID;

export const REACT_APP_AUTHORITY =
	process.env.NODE_ENV === DEVELOPMENT
		? process.env.REACT_APP_AUTHORITY
		: window.REACT_APP_AUTHORITY;

export const REACT_APP_REDIRECT =
	process.env.NODE_ENV === DEVELOPMENT
		? process.env.REACT_APP_REDIRECT
		: window.REACT_APP_REDIRECT;
