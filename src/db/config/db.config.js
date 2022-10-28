const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.CLEARDB_DATABASE_URL, {
	define: {
		freezeTableName: true,
	},
	logging: process.env.NODE_ENV === 'development' ? console.log : false,
});

sequelize
	.authenticate()
	.then(async () => {
		console.log('Conexión a BD: EXITOSA');
		await sequelize.sync();
		console.log('All models were synchronized successfully.');
	})
	.catch(err => {
		console.log('Conexión a BD: ERROR');
		console.log(err);
	});

module.exports = sequelize;
