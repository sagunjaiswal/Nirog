const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const JwtStrategy = require("passport-jwt").Strategy;
const bcrypt = require("bcryptjs");

const User = require("../Models/DoctorSchema");

const cookieExtractor = (req) => {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["access_token"];
  }
  return token;
};

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: cookieExtractor,
      secretOrKey: "sagun",
    },
    (payload, done) => {
      User.findById({ _id: payload.sub }, (err, user) => {
        if (err) return done(err, false);
        if (user) return done(null, user);
        else return done(null, false);
      });
    }
  )
);

passport.use(
  new LocalStrategy((email, password, done) => {
    User.findOne({ email }, (err, user) => {
      if (err) return done(err);
      if (!user) return done(null, false);
      return done(null, true);
    });
  })
);
//                 if(!user) {
//                     return done(null, false, { message : 'That email is not registered!'})
//                 }
//                 //match password
//                 bcrypt.compare(password, user.password, (err, isMatch) => {
//                     if(err) throw err;
//                     if(isMatch){
//                         return done(null, user);
//                     }
//                     else{
//                         return done(null, false, {message: 'Invalid Password'});
//                     }
//                 });
//             }).catch(err =>  console.log(err));
//         })
//     );
//     password.serializeUser(function (user, done) {
//         done(null, user.id);
//     });
//     passport.deserializeUser(function(id, done) {
//         User.findById(id, function(err, user){
//             done(err, user);
//         });
//     });

// const LocalStrategy = require("passport-local").Strategy;
// const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");

// const User = require("../Models/DoctorSchema");

// module.exports = function (passport) {
//   passport.use(
//     new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
//       User.findOne({ email: email })
//         .then((user) => {
//           if (!user) {
//             return done(null, false, {
//               message: "That email is not registered!",
//             });
//           }
//           //match password
//           bcrypt.compare(password, user.password, (err, isMatch) => {
//             if (err) throw err;
//             if (isMatch) {
//               return done(null, user);
//             } else {
//               return done(null, false, { message: "Invalid Password" });
//             }
//           });
//         })
//         .catch((err) => console.log(err));
//     })
//   );
//   passport.serializeUser((user, done) => {
//     done(null, user.id);
//   });
//   passport.deserializeUser((id, done) => {
//     User.findById(id, (err, user) => {
//       done(err, user);
//     });
//   });

// };
