const Location = require("../Models/LocationSchema");

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
