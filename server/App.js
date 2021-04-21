const express = require("express");
const app = express();
const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

//mongoose setup
mongoose.connect(
  process.env.MONGODB_URI,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  },
  () => {
    console.log("MONGODB CONNECTED at the time: " + new Date());
  }
);

//Morgan setup
const morgan = require("morgan");
app.use(morgan("dev"));

//body parser
app.use(express.json());

//CORS ISSUE FIXING
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-COntrol-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT,PATCH,POST,DELETE,GET");
    return res.status(200).json({});
  }
  next();
});

//route import
const doctorRoute = require("./Routes/DoctorRoutes");
const locationRoute = require("./Routes/LocationRoutes");
const timeRoute = require("./Routes/TimeRoutes");

//routes
app.use("/doctor", doctorRoute);
app.use("/location", locationRoute);
app.use("/timeSlots", timeRoute);

app.use("/", (req, res, next) => {
  console.log("In the home route");
  res.json("In the home route");
  next();
});

module.exports = app;
