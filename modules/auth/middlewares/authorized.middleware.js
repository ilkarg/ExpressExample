const jwt = require('jsonwebtoken');

module.exports.authorizedMiddleware = function(req, res, next) {
    const token = req.headers['Authorization'];
    if (token == null) {
      return res.status(401).json({ message: 'Token is undefined' });
    }
    jwt.verify(token, 'secret', (err, user) => {
      if (err) {
        return res.status(403).send({ message: 'Invalid token' });
      }
      req.user = user;
      next();
    });
}