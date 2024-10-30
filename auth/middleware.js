const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization']; // Ambil header authorization
    const token = authHeader && authHeader.split(' ')[1]; // Ambil token setelah "Bearer"

    if (!token) {
        return res.status(403).json({ error: 'Token tidak ditemukan' });
    }

    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(403).json({ error: 'Token tidak valid' });
        }
        req.user = user;
        next();
    });
};


module.exports = authMiddleware;
