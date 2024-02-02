const express = require("express");
const { authorizedMiddleware } = require("./middlewares/authorized.middleware");
const { guestMiddleware } = require("./middlewares/guest.middleware");
const authController = require('./controllers/auth.controller');

module.exports.initRouter = function() {
    const router = express.Router();

    router.get('/public', guestMiddleware, authController.publicGet);
    router.get('/private', authorizedMiddleware, authController.privateGet);
    router.get('/any', authController.anyGet);  
    router.post('/login', guestMiddleware, authController.loginPost);
    router.post('/registration', guestMiddleware, authController.registrationPost);
    router.post('/logout', authorizedMiddleware, authController.logoutPost);

    return router;
};