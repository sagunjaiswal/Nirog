const mongoose = require('mongoose');

const timeSchema = new mongoose.Schema({
    mondayMorningSlot : {
        type:String
    },
    mondayEveningSlot : {
        type:String
    },
    tuedayMorningSlot : {
        type:String
    },
    tuedayEveningSlot : {
        type:String
    },
    wednesdayMorningSlot : {
        type:String
    },
    wednesdayEveningSlot : {
        type:String
    },
    thursdayMorningSlot : {
        type:String
    },
    thursdayEveningSlot : {
        type:String
    },
    fridayMorningSlot : {
        type:String
    },
    fridayEveningSlot : {
        type:String
    },
    saturdayMorningSlot : {
        type:String
    },
    saturdayEveningSlot : {
        type:String
    },
    sundayMorningSlot : {
        type:String
    },
    sundayEveningSlot : {
        type:String
    },
})

module.exports = new mongoose.model('time',timeSchema);