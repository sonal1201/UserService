const express = require('express');
const { userController } = require('../../controller');


const userRoute = express.Router();

userRoute.post('/register', userController.register);
userRoute.post('/login', userController.login);
userRoute.get('/profile', userController.profile)
userRoute.get('/ping', userController.ping)

module.exports = userRoute;

