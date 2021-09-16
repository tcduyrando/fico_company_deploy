const jwt = require("jsonwebtoken");
require("dotenv").config({ path: 'ENV_FILENAME'});

const config = process.env;

const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const verified  = jwt.verify(token, config.TOKEN_KEY);
    req.user = verified;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;
