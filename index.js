const express = require('express');

const app = express();
app.use(express.static('public'));

var path = require("path");

const exphbs = require('express-handlebars');

app.engine('.hbs', exphbs({ extname: '.hbs', defaultLayout: 'main' }));
app.set('view engine', '.hbs');

/*
app.get('/', (req, res) => {

  res.sendFile(path.join(__dirname, '/views/home.html'));

});
*/

app.get('/', (req, res) => {

	var someData = [
		{ name: 'Project A', type: 'Website'},
		{ name: 'Project B', type: 'C++ App'},
		{ name: 'Project C', type: 'Java Application'},
		{ name: 'Project D', type: 'Mobile Game'},
    ];
    
    res.render('home', {
        data: someData
    });	

});

app.listen(3000, () => {
  console.log('Server started. Listening on port 3000');
});