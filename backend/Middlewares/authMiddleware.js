const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'No token provided or malformed' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded.id) {
      return res.status(403).json({ error: 'Token missing user ID' });
    }

    req.user = {
      id: decoded.id,             // ✅ Standard field
      role: decoded.role || null, // Optional, if you use role
      email: decoded.email || null
    };

    next();
  } catch (error) {
    console.error('Token verification error:', error);

    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'Token expired' });
    }

    res.status(401).json({ error: 'Invalid token' });
  }
};

const checkRole = (allowedRoles) => (req, res, next) => {
  if (!allowedRoles.includes(req.user.role)) {
    return res.status(403).json({
      error: `Access denied. Required roles: ${allowedRoles.join(', ')}`
    });
  }
  next();
};

module.exports = {
  verifyToken,
  checkRole
};
