const verifyUser = (req, res, next) => {
  console.log("Verified");
  next();
};
module.exports = verifyUser;
