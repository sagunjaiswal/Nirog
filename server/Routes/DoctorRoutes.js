const express = require('express');
const router = express.Router();
const Doctor = require("../Models/DoctorSchema");

//desc:route for getting the list of all doctors
//method:GET

router.get('/', (req,res) => {
    // Doctor.countDocuments({}, (err,count) => {
    //     if (err) return res.status(400).json({count: null})
    //     return res.status(200).json({
    //         count:count
    //     });
    // })
    res.status(201).json({
        msg:"This is the home route for doctor model"
    });//delete this line
    console.log(req.body);//delete this line
})

module.exports = router;