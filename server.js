const express = require("express");
const http = require("http");
const color = require("colors");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const csrf = require("csurf");
require("dotenv").config();
const passport = require("passport");
const session = require("express-session");
const app = express();
const airport = require("./routes/api/v1/airport");
const aircraft = require("./routes/api/v1/aircraft");
const user = require("./routes/api/v1/user");
const admin = require("./routes/api/v1/admin");
const booking = require("./routes/api/v1/booking"); 
const flight = require("./routes/api/v1/flight");
const subscribe = require("./routes/api/v1/subscribe");
const enquiry = require("./routes/api/v1/enquiry");
var userProfile;

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: "SECRET",
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(cors());
app.use(cookieParser());
app.set("view engine", "ejs");

const server = http.createServer(app);

const db = require("./config/db");
db.connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("SwiftJet Backend API is Live");
});

app.get("/google-auth", function (req, res) {
  res.render("pages/auth");
});
app.get("/csrf-token", (req, res) => {
  res.json({ csrfToken: req.csrfToken() });
});

/*  PASSPORT SETUP  */
app.get("/success", (req, res) => res.send(userProfile));
app.get("/error", (req, res) => res.send("error logging in"));

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});




// const GOOGLE_CLIENT_ID =
//   "868391289862-6en8s0um5rppi9evr8oafmsu81mmd09s.apps.googleusercontent.com";
// const GOOGLE_CLIENT_SECRET = "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";
// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: GOOGLE_CLIENT_ID,
//       clientSecret: GOOGLE_CLIENT_SECRET,
//       callbackURL: "http://localhost:8000/auth/google/callback",
//     },
//     function (accessToken, refreshToken, profile, done) {
//       userProfile = profile;
//       return done(null, userProfile);
//     }
//   )
// );

// app.get(
//   "/auth/google",
//   passport.authenticate("google", { scope: ["profile", "email"] })
// );

// app.get(
//   "/auth/google/callback",
//   passport.authenticate("google", { failureRedirect: "/error" }),
//   function (req, res) {
//     // Successful authentication, redirect success.
//     console.log(res);
//     res.redirect("/success");
//   }
// );

// route for logging out
app.get("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

app.use("/api/v1/airport", airport);
app.use("/api/v1/aircraft", aircraft);
app.use("/api/v1/user", user);
app.use("/api/v1/admin", admin);
app.use("/api/v1/booking", booking);
app.use("/api/v1/flight", flight);
app.use("/api/v1/subscribe", subscribe);
app.use("/api/v1/enquiry", enquiry);
const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}`);
});
