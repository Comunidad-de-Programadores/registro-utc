const { Router } = require('express');

const router = Router();

router.post('/docente/mydevices', addDevice);

exports.module = { router };
