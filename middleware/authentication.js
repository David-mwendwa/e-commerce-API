const CustomError = require('../errors')
const {isTokenValid} = require('../utils');

const authenticateUser = async (req, res, next) => {
  const token = req.signedCookies.token;
  if(!token) {
    throw new CustomError.UnauthenticatedError('Authentication Invalid')
  }

  try {
    const payload = await isTokenValid({token})
    const {user, userId, role} = payload
    req.user = { user, userId, role };
    next();
  } catch (error) {
    throw new CustomError.UnauthenticatedError('Authentication Invalid');
  }
    
}

module.exports = {
  authenticateUser,
}

