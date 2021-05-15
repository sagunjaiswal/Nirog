const express = require("express");
const app = express();
const mongoose = require("mongoose");
const flash = require("connect-flash");
const session = require("express-session");

//passsport config
// const passport = require("passport");
// require("./Routes/passport")(passport);

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

//express session
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

//passport middleware
// app.use(passport.initialize());
// app.use(passport.session());

//connect flash
app.use(flash());

//global vars
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  next();
});

//route import
const doctorRoute = require("./Routes/DoctorRoutes");
const locationRoute = require("./Routes/LocationRoutes");
const userRoute = require("./Routes/UserRoutes");
const contactUsRoute = require("./Routes/contactUs");
// const passport = require("./Routes/passport");

//routes
app.use("/doctor", doctorRoute);
app.use("/location", locationRoute);
// app.use("/email", contactUsRoute);
app.use("/user", userRoute);

app.use("/", (req, res, next) => {
  console.log("In the home route");
  res.json("In the home route");
  next();
});

module.exports = app;
