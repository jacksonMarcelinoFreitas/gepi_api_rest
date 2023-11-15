const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const connection = new Sequelize(dbConfig); //aqui é feita a conexão

const User = require('../models/User');
const Epi = require('../models/Epi');
const Supplier = require('../models/Supplier');
const Employee = require('../models/Employee');
const Delivery = require('../models/Delivery');

User.init(connection);
Epi.init(connection);
Supplier.init(connection);
Employee.init(connection);
Delivery.init(connection);

module.exports = connection; //exporta para uso em outro lugar