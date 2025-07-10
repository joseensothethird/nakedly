const jwt = require('jsonwebtoken');

// Middleware function to verify JWT
function verifyToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // "Bearer token"

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }

    // ✅ DEBUG: Log the decoded token to make sure it includes user id
    console.log('✅ Decoded JWT:', decoded);

    // Ensure decoded token has id
    if (!decoded.id) {
      return res.status(403).json({ message: 'Token is missing user ID' });
    }

    req.user = { id: decoded.id }; // ✅ Add only the user ID to request
    next();
  });
}

module.exports = verifyToken;
