const User = require("../Models/UserSchema");
const router = require("express").Router();

router.post("/register", (req, res) => {
  const { name, number, email, password } = req.body;
  User.findOne({ email: email }).then((data) => {
    if (data) {
      return res.status(409).json({
        info: "email already registered, please use another email.",
      });
    }
    User.findOne({ number: number }).then((data) => {
      if (data) {
        return res.status(409).json({
          info: "Contact number already registered, please use another email.",
        });
      }

      const newUser = new User({
        name: name,
        number: number,
        email: email,
        password: password,
      });

      newUser
        .save()
        .then((user) => {
          console.log("user data posted -> ", user);
          return res.status(201).json({
            info: "user created successfully",
            userId: user._id,
          });
        })
        .catch((err) => {
          return res.status(400).json({
            info: "user cant be created at the moment!",
            error: err,
          });
        });
    });
  });
});
module.exports = router;
