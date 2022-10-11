const path = require('path');
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

// Import dotenv
require("dotenv").config();


// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Nodemailer
const nodemailer = require("nodemailer");

// Googleapis
const { google } = require("googleapis");

// Pull out OAuth from googleapis
const OAuth2 = google.auth.OAuth2;

const hbs = require("nodemailer-express-handlebars");

const createTransporter = () => {
  //Connect to the oauth playground
  const oauth2Client = new OAuth2(
    process.env.OAUTH_CLIENT_ID,
    process.env.OAUTH_CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
  );

  // Add the refresh token to the Oauth2 connection
  oauth2Client.setCredentials({
    refresh_token: process.env.OAUTH_REFRESH_TOKEN,
  });

  const accessToken = new Promise((resolve, reject) => {
    oauth2Client.getAccessToken((err, token) => {
      if (err) {
        reject("Failed to create access token : error message(" + err);
      }
      resolve(token);
    });
  });

  // Authenticating and creating a method to send a mail
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.SENDER_EMAIL,
      accessToken,
      clientId: process.env.OAUTH_CLIENT_ID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    },
  });

  return transporter;
  
};

// point to the template folder
const handlebarOptions = {
  viewEngine: {
    partialsDir: path.resolve("./views/"),
    defaultLayout: false,
  },
  viewPath: path.resolve("./views/"),
};

// Route to handle sending mails
app.post("/send_email", (req, res) => {
  
  const recipient = req.body.email;
  const mailSubject = req.body.subject;
  const mailBody = req.body.message;

  let transport = createTransporter()
  // use a template file with nodemailer
  transport.use("compile", hbs(handlebarOptions));

  // Mail options
  let mailOptions = {
    from: process.env.SENDER_EMAIL,
    to: recipient,
    subject: mailSubject,
    text: mailBody,
    template: "email",
    context: {
      name: recipient, // replace {{name}} with Adebola
      company: "My Company", // replace {{company}} with My Company
    },
  };
  let mailOptions2 = {
    from: process.env.SENDER_EMAIL,
    to: process.env.SENDER_EMAIL,
    subject: mailSubject,
    text: mailBody,
    html: "<b>Please give a response!</b>"
    
  };
    
  // Send email
  transport.sendMail(mailOptions2, function (error, info) {
    if (error) {
      // failed block
      console.log(error);
    } else {
      // Success block
      console.log("Email sent: " + info.response);
    }
  }) 
  transport.sendMail(mailOptions, function (error, info) {
    if (error) {
      // failed block
      console.log(error);
    } else {
      // Success block
      console.log("Email sent: " + info.response);
      return res.redirect("/success.html");
    }
  })    

});


// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

