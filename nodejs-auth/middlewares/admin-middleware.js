const adminMiddleware = (req, res, next) => {
  console.log("== ADMIN MW CALLED ==");

  if (req.userInfo.role !== "admin") {
    return res.status(403).json({
      success: false,
      message: "Access denied, Admin rights requierd",
    });
  }

  next();
};

module.exports = {
  adminMiddleware,
};
