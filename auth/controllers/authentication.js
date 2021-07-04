const User = require("../modules/user");

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
      res.json({ succes: true });
    });
  });

  // email not existing - create and save
};
