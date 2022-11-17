// eslint-disable-next-line no-useless-escape
export const ENVIROMENT =
	window.NODE_ENV === '<%= NODE_ENV %>' ? 'development' : window.NODE_ENV;

export const DEVELOPMENT = 'development';
export const PRODUCTION = 'production';
export const IS_DEV_ENVIROMENT = ENVIROMENT === DEVELOPMENT;