//Import LowDB; purely for email tracking
import { join, dirname } from 'path';
import { Low, JSONFile } from 'lowdb';

import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

//Use JSON file for storage
const file = join(__dirname, 'db.json');
const adapter = new JSONFile(file);
const db = new Low(adapter);

//Import API key and email recipient
//Because mailTypes contains sensitive information such as API keys, it is not included in this repository.
import { key, recipient } from './mail.js';
// const mailTypes = require('./mail');

//Server via Express
import express from 'express';
// const express = require('express');

//Define app
const app = express();
const PORT = process.env.PORT || 3000;

//Define + config mailing capabilities
import mailService from 'sib-api-v3-sdk';
// const mailService = require('sib-api-v3-sdk');

let defaultClient = mailService.ApiClient.instance;
let apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = key;

let apiInstance = new mailService.TransactionalEmailsApi();

//Define mail protocol
const sendMail = async (firstName, 
  lastName, 
  email, 
  phone, 
  subject, 
  message, 
  callback) => {

  //Read database file and set data
  await db.read();

  //If missing set default data
  db.data ||= {
    "emails": 0,
    "cutoff": 300,
    "lastUpdate": Date.now()
  };

  let currentDate = Date.now();

  //Longer than 24 hrs since last refresh
  if ( (currentDate - db.data.lastUpdate) >= 86400000 ) {
    //Update database
    db.data.lastUpdate = currentDate;
    db.data.emails = 0;
  }

  if (db.data.emails < db.data.cutoff) {
    //Format data into email content
    const fullName = firstName + ' ' + lastName;
    const fullHTML = '<p>' + message + "</p><br /><br /><p>Sent by Node Mailer and MailGun | Contact this email's sender at " + phone + "<br />Email " + (db.data.emails + 1) + " out of 300 today";

    let sendSmtp = new mailService.SendSmtpEmail();

    sendSmtp.sender = {'name': fullName, 'email': email};
    sendSmtp.replyTo = {'name': fullName, 'email': email};
    sendSmtp.to = [recipient];
    sendSmtp.subject = subject;
    sendSmtp.htmlContent = fullHTML;

    
    apiInstance.sendTransacEmail(sendSmtp)
    .then(async function (data) {
      //Successful
      callback(null, data);
      db.data.emails += 1;
      await db.write();

    }, async function (error) {
      //Error
      callback(err, null);
      await db.write();
    });
  } else {
    console.log('Sorry, daily email limit reached.');
    callback(err, null);
  }
}


//Serve static files
app.use(express.static('public'));



//Configure data parsing for email form
app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());


//Email Routing
app.post('/email', (req, res) => {
  const { firstName, lastName, email, phone, subject, message } = req.body;  
  res.json({message: 'Data received'});

  sendMail(firstName, lastName, email, phone, subject, message, function (err, data) {
    //Error handler for emails
    if (err) {
      console.log('Internal Error, message not sent');
    } else {
      res.status({ message: 'Email sent!' });
    }
  });
});

//Deploy server
app.listen(PORT, () => {
  console.log('Server up and running at port ', PORT);
});