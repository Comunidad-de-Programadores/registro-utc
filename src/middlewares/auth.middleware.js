const jwt = require('jsonwebtoken');
const { HTTP_response } = require('../handlers/message.handler');

module.exports = function (req, res, next) {
	//authorization: Bearer <token>
	const bearerHeader = req.headers.authorization;

	if (typeof bearerHeader !== 'undefined') {
		const bearerToken = bearerHeader.split(' ')[1];

		jwt.verify(bearerToken, 'secretkey', error => {
			if (error) return HTTP_response(req, res, 403, 'token invalido', { error }, false);
		});

		next();
	} else {
		return HTTP_response(req, res, 403, 'sin token en solicitud', {}, false);
	}
};
