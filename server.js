const mailTypes = require('./mail');

//Server via Express
const express = require('express');

//Define app
const app = express();
const PORT = process.env.PORT || 3000;
const router = express.Router();


//Define + config mailing capabilities
const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
const transporter = nodemailer.createTransport(mailGun(mailTypes.auth));

const sendMail = (firstName, lastName, email, phone, message, callback) => {
  const fullName = firstName + ' ' + lastName;
  const fullText = '<p>' + message + "</p><br /><br /><p>Sent by Node Mailer and MailGun | Contact this email's sender at " + phone
  const mailOptions = {
    sender: fullName,
    from: email,
    replyTo: email,
    to: mailTypes.recipient,
    subject: 'Portfolio Website Email',
    text: fullText
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
}


//Serve static files
app.use(express.static('public'));



//Configure data parsing for email form
app.use(express.urlencoded({
  extend: false
}));
app.use(express.json());


//Basic routing
app.post('/email', (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;  
  res.json({message: 'Data received'});

  sendMail(firstName, lastName, email, phone, message, function (err, data) {
    //Error handler for emails
    if (err) {
      res.status(500).json({ message: 'Internal Error' });
    } else {
        res.status({ message: 'Email sent!' });
    }
  });
});

//Deploy server
app.listen(PORT, () => {
  console.log('Server up and running at port ', PORT);
});