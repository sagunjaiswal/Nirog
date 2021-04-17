const express = require('express');
const router = express.Router();
const Doctor = require("../Models/DoctorSchema");
const location = require('../Models/LocationSchema');

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


//desc:create a doctor acoount/register new doctor
//METHOD:POST
router.post('/register', (req,res) => {
    //destructuring the req.body
    const {name, highestDegree, speciality, number, experience, description, location} = req.body;
    //create a new instance of the location model
    const newLocation = new location({
        
    })
    //create a new instance of the doctor model
    const doctor = new Doctor({
        name : name,
        highestDegree: highestDegree,
        speciality: speciality,
        contactNumber : number,
        experience : experience,
        description: description
    })
    //save the newly created object using mongoose native method
})

module.exports = router;