const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const Doctor = require("../Models/DoctorSchema");
const Location = require("../Models/LocationSchema");
const TimeSchema = require("../Models/TimeSchema");
const passport = require("passport");
const jwt = require("jsonwebtoken");

//desc:route for getting the list of all doctors
//method:GET
router.get("/", (req, res) => {
  res.status(201).json({
    msg: "This is the home route for doctor model",
  });
});

//desc:create a doctor acoount/register new doctor
//METHOD:POST
router.post("/register", (req, res) => {
  const {
    description,
    experience,
    highestDegree,
    location,
    name,
    number,
    speciality,
    email,
    password,
  } = req.body;
  const {
    city,
    clinicName,
    district,
    landmark,
    locality,
    pinCode,
    postOffice,
    state,
    streetName,
  } = location;
  //check whether the location exists or not
  Location.findOne({
    clinicName: clinicName,
    streetName: streetName,
    pinCode: pinCode,
  })
    .exec()
    .then((clinic) => {
      if (clinic) {
        return res.status(409).json({
          msg: "Clinic already exists!",
        });
      } else {
        //create time object and get the _id of that time object
        const {
          fridayEveningSlot,
          fridayMorningSlot,
          mondayEveningSlot,
          mondayMorningSlot,
          saturdayEveningSlot,
          saturdayMorningSlot,
          sundayEveningSlot,
          sundayMorningSlot,
          tuesdayEveningSlot,
          tuesdayMorningSlot,
          thursdayEveningSlot,
          thursdayMorningSlot,
          wednesdayEveningSlot,
          wednesdayMorningSlot,
        } = location.time;

        const timeSlots = new TimeSchema({
          mondayMorningSlot: mondayMorningSlot,
          mondayEveningSlot: mondayEveningSlot,
          tuesdayMorningSlot: tuesdayMorningSlot,
          tuesdayEveningSlot: tuesdayEveningSlot,
          wednesdayMorningSlot: wednesdayMorningSlot,
          wednesdayEveningSlot: wednesdayEveningSlot,
          thursdayMorningSlot: thursdayMorningSlot,
          thursdayEveningSlot: thursdayEveningSlot,
          fridayMorningSlot: fridayMorningSlot,
          fridayEveningSlot: fridayEveningSlot,
          saturdayMorningSlot: saturdayMorningSlot,
          saturdayEveningSlot: saturdayEveningSlot,
          sundayMorningSlot: sundayMorningSlot,
          sundayEveningSlot: sundayEveningSlot,
        });
        timeSlots
          .save()
          .then((time) => {
            const newLocation = new Location({
              clinicName: clinicName,
              streetName: streetName,
              locality: locality,
              landmark: landmark,
              postOffice: postOffice,
              pinCode: pinCode,
              city: city,
              district: district,
              state: state,
              time: time,
            });
            newLocation
              .save()
              .then(async (locationData) => {
                const existingEmail = await Doctor.findOne({ email: email });
                if (existingEmail)
                  return res.status(409).json({
                    msg: "An account with this email already exists!",
                  });
                const existingNumber = await Doctor.findOne({ number: number });
                if (existingNumber) {
                  return res.status(409).json({
                    msg: "This number was already registered earlier!",
                  });
                }

                const doctor = new Doctor({
                  name: name,
                  highestDegree: highestDegree,
                  speciality: speciality,
                  number: number,
                  experience: experience,
                  description: description,
                  location: [locationData._id],
                  email: email,
                  password: password,
                });

                bcrypt.genSalt(10, (err, salt) => {
                  bcrypt.hash(doctor.password, salt, (err, hash) => {
                    if (err) throw err;
                    doctor.password = hash;
                    doctor
                      .save()
                      .then((data) => {
                        req.flash(
                          "sucess_msg",
                          "You are now registered and can log in"
                        );
                        // res.redirect("/login");
                        return res.status(201).json({
                          info: "Doctor is Successfully registered!",
                        });
                      })
                      .catch((err) => {
                        res.json(err);
                      });
                  });
                });
                //save the newly created object using mongoose native method

                // });
                // }
              })
              .catch((err) => {
                return res.status(400).json({
                  info: "location cant be added!!",
                  error: err,
                });
              });
          })
          .catch((err) => {
            return res.status(400).json({
              info: "time stamps cant be added!!",
              error: err,
            });
          });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

//login
router.post("/login", async (req, res) => {
  try {
    ///the destructuring of the inputed data
    const { email, password } = req.body;
    //validate
    if (!email || !password)
      return res.status(400).json({ msg: "Not all fields have been entered" });

    const user = await Doctor.findOne({ email: email });
    console.log(
      "🚀 ~ file: DoctorRoutes.js ~ line 189 ~ router.post ~ user",
      user
    );

    //if the user doesnt exists
    if (!user)
      return res
        .status(400)
        .json({ msg: "No account with this email has been registered!" });

    //matching the password while logging in

    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch)
        return res
          .status(400)
          .json({ message: "Invalid Credential", loginStatus: false });

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      res.json({
        token,
        user: {
          id: user._id,
        },
      });
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
module.exports = router;
