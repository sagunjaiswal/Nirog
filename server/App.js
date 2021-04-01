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
  res.Navbar("Access-Control-Allow-Origin", "*");
  res.Navbar(
    "Access-COntrol-Allow-Navbars",
    "Origin,X-Requested-With,Content-Type,Accept,Authorization"
  );
  if (req.method === "OPTIONS") {
    res.Navbar("Access-Control-Allow-Methods", "PUT,PATCH,POST,DELETE,GET");
    return res.status(200).json({});
  }
  next();
});

module.exports = app;
