const express = require("express");
const router = express.Router();
const Doctor = require("../Models/DoctorSchema");
const Location = require("../Models/LocationSchema");
const TimeSchema = require("../Models/TimeSchema");

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
    name,
    highestDegree,
    speciality,
    number,
    experience,
    description,
    location,
    email,
    password,
  } = req.body;
  const {
    clinicName,
    streetName,
    locality,
    landmark,
    postOffice,
    pinCode,
    city,
    district,
    state,
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
        console.log("Clinic Exists");
        //appropriate code to send meaningful response to the doctorRoute
      } else {
        console.log("Clinic doesnt exist");

        //create time object and get the _id of that time object
        const {
          mondayMorningSlot,
          mondayEveningSlot,
          tuesdayMorningSlot,
          tuesdayEveningSlot,
          wednesdayMorningSlot,
          wednesdayEveningSlot,
          thursdayMorningSlot,
          thursdayEveningSlot,
          fridayMorningSlot,
          fridayEveningSlot,
          saturdayMorningSlot,
          saturdayEveningSlot,
          sundayMorningSlot,
          sundayEveningSlot,
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
              .then((locationData) => {
                const doctor = new Doctor({
                  name: name,
                  highestDegree: highestDegree,
                  speciality: speciality,
                  // contactNumber : number,
                  experience: experience,
                  description: description,
                  location: [locationData._id],
                  email: email,
                  password: password,
                });
                //save the newly created object using mongoose native method
                doctor
                  .save()
                  .then((data) => {
                    res.json(data);
                  })
                  .catch((err) => {
                    res.json(err);
                  });
                // });
              })
              .catch((err) => {
                return res.status(400).json({
                  info: "location cant be added!!",
                  error: err,
                });
              });
          })
          .catch((err) => {
            console.log(
              "🚀 ~ file: TimeRoutes.js ~ line 44 ~ timeStamps.save ~ err",
              err
            );
          });
      }
    })
    .catch((err) => {
      console.log(
        "🚀 ~ file: LocationRoutes.js ~ line 41 ~ router.post ~ err",
        err
      );
    });
});
module.exports = router;
