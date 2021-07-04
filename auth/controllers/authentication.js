const User = require("../models/user");

const jwt = require("jwt-simple");
const config = require("../config");

tokenForUser = (user) => {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
};

exports.signin = (req, res, next) => {
  res.send({ token: tokenForUser(res.user) });
};

exports.signup = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !passord) {
    return res
      .status(422)
      .send({ error: "You must provide email and password" });
  }
  User.findOne({ email: email }, (err, existingUser) => {
    // see if email exist

    if (err) {
      return next(err);
    }
    if (existingUser) {
      return res.status(422).sen({ error: "Email is busy" });
    }

    const user = new User({
      email: email,
      password: password,
    });

    user.save((err) => {
      if (err) {
        return next(err);
      }
      res.json({ token: tokenForUser(user) });
    });
  });
};
