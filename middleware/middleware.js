exports.mid = (req, res, next) => {
  const authHeader = req.header("isFreeAppUser");
  if (authHeader) {
    next();
  } else {
    return res.status(400).send("headers is missing");
  }
};

