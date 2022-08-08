const { request, response } = require('express');

const { HTTP_response } = require('../handlers/message.handler');

//TODO: DOCENTE/my-devices CREAR TODO EL CRUD DE DISPOSITIVOS

exports.addDevice = async (req = request, res = response) => {
	const { nombre_dispositivo, marca_dispositivo, matricula } = req.body;
	try {
		return HTTP_response(req, res, 500, 'Error al agregar el dispositivo', {}, false);
	} catch (error) {
		console.log(error);
		return HTTP_response(req, res, 500, 'Error al agregar el dispositivo', {}, false);
	}
};
