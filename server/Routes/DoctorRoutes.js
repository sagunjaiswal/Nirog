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
    const {name, highestDegree, speciality, number, experience, description } = req.body;
    //destructuring the req.body
    // const {name,highestDegree, number} = req.body;
    //check whether any doctor with same name and number exists or not
    //if exists send appropriate response to the frontend
    //else create a new doctor object  and save it into the db and send appropriate response
    //create a new instance of the location model
    // const newLocation = new location({
        
    // })
    //create a new instance of the doctor model
    const doctor = new Doctor({
        name : name,
        highestDegree: highestDegree,
        speciality: speciality,
        contactNumber : number,
        experience : experience,
        description: description
    });
    //save the newly created object using mongoose native method
    doctor.save().then(data => {
        res.json(data);
    }).catch(err => {
        res.json(err);
    });
})

module.exports = router;