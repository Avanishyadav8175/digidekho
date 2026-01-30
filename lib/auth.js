import jwt from 'jsonwebtoken';

export function generateToken(payload) {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '7d' });
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return null;
  }
}

export function isAuthenticated(request) {
  const token = request.cookies.get('admin-token');
  if (!token) return false;
  
  const decoded = verifyToken(token.value);
  return !!decoded;
}