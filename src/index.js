const express = require('express');
const cors = require('cors');
const path = require('path');

const authJWT = require('./middlewares/auth.middleware');

require('dotenv').config({ path: '.env' });
require('./db/config/db.config');

const { NODE_ENV, PORT, REACT_APP_API_URL, API } = process.env;

const app = express();

const port = PORT || 3000;

/* configurations */
if (NODE_ENV === 'development') {
	const morgan = require('morgan');
	app.use(morgan('dev'));
}

app.use(cors());
app.use(express.json({ limit: '100MB' }));
app.use(express.urlencoded({ extended: false }));

/* routes */
app.use(API, authJWT, require('./routes/cms.routes'));

/*    Include the production version of React   */
//React compiled folder path
const buildFolder = './public';

// treat the index.html as a template and substitute the value at runtime
app.set('views', path.join(__dirname, buildFolder));
app.engine('html', require('ejs').renderFile);
app.use('/static', express.static(path.join(__dirname, `${buildFolder}/static`)));

//Redirect any path to index.html
app.use('*', (req, res) => res.status(200).render('index.html', { REACT_APP_API_URL }));

//inicializa el web-server y dentro tambien inicializa la conexión a la BD
app.listen(port, () => {
	console.log('El servidor esta corriendo por el puerto: ', port);
});
