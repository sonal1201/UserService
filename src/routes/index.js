const express = require('express');
const userRoute = require('./v1/user-routes');

const apiRoute = express.Router();

apiRoute.use('/v1', userRoute)

module.exports = apiRoute

