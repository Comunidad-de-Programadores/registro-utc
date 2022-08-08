const Sequelize = require('sequelize');
const bcrypt = require('bcrypt-nodejs');

const db = require('../config/db.config');

const Usuario = db.define(
	'usuario',
	{
		id: {
			type: Sequelize.INTEGER.UNSIGNED,
			primaryKey: true,
			autoIncrement: true,
		},
		nombre: {
			type: Sequelize.STRING(255),
		},
		apellido_materno: {
			type: Sequelize.STRING(255),
		},
		apellido_paterno: {
			type: Sequelize.STRING(255),
		},
		usuario: {
			type: Sequelize.STRING(10),
			allowNull: false,
			unique: true,
			validate: {
				notEmpty: {
					msg: 'El usuario no puede estar vácio',
				},
				isUnique: (value, next) => {
					let self = this;
					Usuario.findOne({ where: { usuario: value } })
						.then(usuario => {
							if (usuario && self.id !== usuario.id) {
								return next('El usuario ya se encuentra registrado');
							}
							return next();
						})
						.catch(error => {
							return next(error);
						});
				},
			},
		},
		contraseña: {
			type: Sequelize.STRING(255),
		},
		tipo_usuario: {
			type: Sequelize.STRING(255),
		},
	},
	{
		timestamps: false,
		hooks: {
			beforeCreate(usuario) {
				usuario.password = bcrypt.hashSync(usuario.password, bcrypt.genSaltSync(10));
			},
		},
	},
);

Usuario.prototype.validatePassword = function (password) {
	return bcrypt.compareSync(password, this.password);
};

module.exports = { Usuario };
