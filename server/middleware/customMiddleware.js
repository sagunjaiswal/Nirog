const TimeSchema = require("../Models/TimeSchema");

const timeSlotCreator = (req, res, next) => {
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
  } = req.body;
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
      console.log(
        "🚀 ~ file: TimeRoutes.js ~ line 42 ~ timeStamps.save ~ time",
        time
      );
      req.body.timeslot = time._id;
    })
    .catch((err) => {
      console.log(
        "🚀 ~ file: TimeRoutes.js ~ line 44 ~ timeStamps.save ~ err",
        err
      );
      req.timeslot = null;
    });
  next();
};

module.exports = timeSlotCreator;
