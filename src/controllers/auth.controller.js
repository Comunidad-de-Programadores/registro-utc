const { request, response } = require('express');
const { Usuario } = require('../db/models/Usuario.model');

const { HTTP_response } = require('../handlers/message.handler');

exports.signIn = async (req = request, res = response) => {
	const { usuario, contrasena } = req.body;

	try {
		const currentUser = await Usuario.findOne({ where: { usuario } });

		if (!currentUser)
			return HTTP_response(req, res, 404, false, 'el usuario no existe', req.body);

		return currentUser.validatePassword(password)
			? HTTP_response(req, res, 200, true, 'inicio de sesión correctamente', currentUser)
			: HTTP_response(req, res, 401, false, 'contraseña incorrecta');
	} catch (error) {
		console.log(error);
		return HTTP_response(req, res, 500, 'Error al crear usuario', { error }, false);
	}
};
