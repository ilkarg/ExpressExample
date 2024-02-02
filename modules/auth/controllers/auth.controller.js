const jwt = require('jsonwebtoken');
const {createHash} = require('node:crypto');
const {User} = require('../models/user.model');

exports.publicGet = function(req, res) {
    res.json({ message: 'This is a public route (for non-authenticated user)' });
};

exports.privateGet = function(req, res) {
    res.json({ message: 'This is a private route (for authenticated user)', user: req.user });
};

exports.anyGet = function(req, res) {
    res.json({ message: 'This is an unrestricted route' });
};

exports.loginPost = async function(req, res) {
    const user = await User()
        .find({
            username: req.body.username,
            password: req.body.password
        })
        .then(function(value) {
            return value;
        });
    /*const user = {
        username: req.body?.username,
        password: createHash('sha256').update(req.body?.password).digest('hex')
    };*/

    if (!user) {
        return res
            .status(401)
            .json({message: 'Неверные логин или пароль'});
    }

    const token = jwt.sign({...user.username}, 'secret', { expiresIn: '1h' });
    return res
        .status(200)
        .json({message: 'Вы успешно вошли в аккаунт', token: token});
};

exports.registrationPost = function(req, res) {

}

exports.logoutPost = function(req, res) {
    
}