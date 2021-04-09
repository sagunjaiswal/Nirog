const express = require('express');
const router = express.Router();
const Doctor = require("../Models/DoctorSchema");

//desc:route for getting the list of all doctors
//method:GET

router.get('/', (req,res) => {
    Doctor.countDocuments({}, (err,count) => {
        return res.json({
            count:count
        });
    })
})

module.exports = router;