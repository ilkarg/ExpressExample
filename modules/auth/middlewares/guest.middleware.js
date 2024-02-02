module.exports.guestMiddleware = function(req, res, next) {
    const token = req.headers['Authorization'];  
    if (token) {    
        return res.status(401).json({ message: 'User authorized' });
    }  
    next();
}