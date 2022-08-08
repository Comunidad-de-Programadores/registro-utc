const { Router } = require('express');
const { addDevice } = require('../controllers/docente.controller');

const router = Router();

router.post('/docente/mydevices', addDevice);

exports.module = { router };
