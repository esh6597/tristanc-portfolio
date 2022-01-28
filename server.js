//Server via Express
const express = require('express');

//Define app
const app = express();
const PORT = process.env.PORT || 3000;
const router = express.Router();

app.use(express.static('public'));

app.use(express.urlencoded({
  extend: false
}));
app.use(express.json());

//Basic routing
app.post('/email', (req, res) => {
  //Send email
  console.log('Data: ', req.body);
  res.json({message: 'Data received'});
});

//Deploy server
app.listen(PORT, () => {
  console.log('Server up and running at port ', PORT);
});