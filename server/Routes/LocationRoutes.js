const Location = require("../Models/LocationSchema");
const TimeSchema = require("../Models/TimeSchema");

//custom middleware import
const timeSlotCreator = require("../middleware/customMiddleware");

//import express router
const router = require("express").Router();

//create a route to get all the location
//desc:route to get all the listed location
//METHOD:GET
router.get("/", (req, res) => {
  Location.find()
    .exec()
    .then((locations) => {
      console.log(
        "🚀 ~ file: LocationRoutes.js ~ line 11 ~ Location.find ~ locations",
        locations
      );
    })
    .catch((err) => {
      console.log("🚀 ~ file: LocationRoutes.js ~ line 18 ~ .then ~ err", err);
    });
});
//create a route for creation of location
//desc:route to create location
//METHOD:POST
router.post("/", (req, res) => {
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
  } = req.body;
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
        } = req.body.time;

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
        // console.log(
        //   "🚀 ~ file: LocationRoutes.js ~ line 88 ~ .then ~ timeSlots",
        //   timeSlots
        // );

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
                console.log(
                  "🚀 ~ file: LocationRoutes.js ~ line 52 ~ .then ~ locationData",
                  locationData
                );
                return res.status(201).json({
                  info: "Location added successfully",
                  locationId: locationData._id,
                });
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
