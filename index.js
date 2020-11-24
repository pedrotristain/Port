 

/* Define used packages */
const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const hbshelpers = require('handlebars-helpers');
const multihelpers = hbshelpers();

/* Configure static folder as 'public' */
app.use(express.static('public'));

/* Set up path object as 'path' */
var path = require("path");

/* 
	Handlebars configuration:
	- Define main layout as 'main'
	- Set up handlebars extension as '.hbs'
	- Helper 'navlink' sets the active link class to 'active'.
	- Helper 'equal' compares 2 values equivalency and return 'true' or 'false'.
*/
app.engine('.hbs', exphbs({
	extname: '.hbs',
	defaultLayout: 'main',
    helpers: {
		
        navLink: function(url, options){

			var active = (url == app.locals.activeRoute) ? 'active' : '';

			// TODO: FIND OUT HOW TO GET ACTIVE ROUTE

			return `
			<li class="nav-item ${active}">
				<a class="nav-link" href="${url}">${options.fn(this)}</a>
			</li>`;

		}

    }

}));

app.set('view engine', '.hbs');

/* Handlebars helpers */

/* navLink formats the html in the navbar and sets the class to 'active' if the current page matches the 'url' */
// Handlebars.registerHelper('navLink',
// 	function(url, options){
// 		return '<li' + 
// 			((url == app.locals.activeRoute) ? ' class="active" ' : '') + 
// 			'><a href="' + url + '">' + options.fn(this) + '</a></li>';
// 	}
// );

// Handlebars.registerHelper('equal', 
// 	function (lvalue, rvalue, options) {
// 		if (arguments.length < 3)
// 			throw new Error("Handlebars Helper equal needs 2 parameters");
// 		if (lvalue != rvalue) {
// 			return options.inverse(this);
// 		} else {
// 			return options.fn(this);
// 		}
// 	}
// );

/* Home Page */
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

/* Contact Page */
app.get('/contact', (req, res) => {

    res.render('contact', { page: 'contact' });	

});

/* Start server and listen on port '3000' */
app.listen(3000, () => {
  console.log('Server started. Listening on port 3000');
});

