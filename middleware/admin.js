// middleware for checking if admin

module.exports = async function (req, res, next) {
  //Check if not authorized
  if (!req.user.admin) {
    return res.status(401).json({ msg: "No authorization" });
  } else {
    next();
  }
};
