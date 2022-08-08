const { Router } = require('express');
const { createNewUser, getAllUsers } = require('../controllers/cms.controller');

const router = Router();

router.get('/cms/get-users', getAllUsers);

router.post('/cms/new-user', createNewUser);

module.exports = router;
