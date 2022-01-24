//Server via Express
const express = require('express');

//Define app
const app = express();
const PORT = process.env.PORT || 3000;
const router = express.Router();

app.use(express.static('public'));

//Basic routing
router.route('/email')
.get((req, res, next) => {
  res.statusCode = 403;
  res.end('GET operation not allowed!');
})
.post((req, res, next) => {
  res.statusCode = 403;
  res.end('POST operation not allowed!');
})
.put((req, res, next) => {
  res.statusCode = 403;
  res.end('PUT operation not allowed!');
})
.delete((req, res, next) => {
  res.statusCode = 403;
  res.end('DELETE operation not allowed!');
});

//Deploy server
app.listen(PORT, () => {
  console.log('Server up and running at port ', PORT);
});