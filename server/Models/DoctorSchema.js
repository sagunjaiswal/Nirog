const mongoose = require("mongoose");
// const LocationSchema = require("./LocationSchema");

const doctorSchema = new mongoose.Schema({
    name : { 
        type: String, 
        required : true,
    },
    highestDegree : {
        type : String,
        required:true,
    },
    speciality : {
        type: String,
    },
    // contactNumber : { 
    //     type: Number,
    //     required: true
    // },
    experience: {
        type : String,
        required: true
    },
    // rating:{
    //     type:Number,
    // },
    description : {
        type: String,
        required: true
    },
    // location : [{
    //     type :mongoose.Schema.Types.ObjectId,
    //     ref : LocationSchema
    // }]
})

module.exports = Doctor = mongoose.model('doctor', doctorSchema);