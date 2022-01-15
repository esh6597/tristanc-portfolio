//Server via Express
const express = require('express');

//Define app
const app = express();
const PORT = process.env.PORT || 3000;

//Serve static assets in /public
/**
 * Note that this doesn't throw an error if the domain isn't found; instead it uses next()
 */
app.use(express.static('public'));

//Deploy server
app.listen(PORT, () => {
  console.log('Server up and running at port ', PORT);
});