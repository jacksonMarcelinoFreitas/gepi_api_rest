const { Router } = require('express');

const suppliersRouter = require('./suppliers.routes');
const employeesRouter = require('./employees.routes');
const deliveryRouter = require('./delivery.routes');
const usersRouter = require('./users.routes');
const episRouter = require('./epis.routes');

const routes = Router();

routes.use('/suppliers', suppliersRouter);
routes.use('/employees', employeesRouter);
routes.use('/deliveries', deliveryRouter);
routes.use('/users', usersRouter);
routes.use('/epis', episRouter);

module.exports = routes;