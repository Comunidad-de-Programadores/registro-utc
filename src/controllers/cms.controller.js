const { request, response } = require('express');
const { Usuario } = require('../db/models/Usuario.model');

const { HTTP_response } = require('../handlers/message.handler');

const TYPE_USER = {
	admin: 1,
	user: 2,
	seguridad: 3,
};

const PLANTEL = {
	niza: 1,
	londres: 2,
	havre: 3,
	hill: 4,
};

exports.createNewUser = async (req = request, res = response) => {
	const {
		nombre,
		apellido_materno,
		apellido_paterno,
		usuario,
		contrasena,
		plantel,
		tipo_usuario,
	} = req.body;

	try {
		const { dataValues } = await Usuario.create({
			nombre,
			apellido_materno,
			apellido_paterno,
			usuario,
			contrasena,
			plantel: PLANTEL[plantel.toLowerCase()],
			tipo_usuario: TYPE_USER[tipo_usuario.toLowerCase()],
		});

		return HTTP_response(req, res, 201, 'se ha creado un usuario', dataValues, true);
	} catch (error) {
		console.log(error);
		return HTTP_response(req, res, 500, 'Error al crear usuario', { error }, false);
	}
};

exports.getAllUsers = async (req = request, res = response) => {
	try {
		const response = await Usuario.findAll();

		return HTTP_response(req, res, 201, 'se ha creado un usuario', response, true);
	} catch (error) {
		console.log(error);
		return HTTP_response(req, res, 500, 'Error al crear usuario', { error }, false);
	}
};
