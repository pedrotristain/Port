const express = require('express');

const app = express();
app.use(express.static('public'));

var path = require("path");


app.get('/', (req, res) => {

  res.sendFile(path.join(__dirname, '/views/home.html'));

});

app.listen(3000, () => {
  console.log('Server started. Listening on port 3000');
});