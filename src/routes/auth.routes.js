const { Router } = require('express');
const { signIn } = require('../controllers/auth.controller');

const router = Router();

router.post('/auth/signin', signIn);

exports.module = { router };
