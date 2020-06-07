let port = process.env.PORT;

const express = require('express');
const nunjucks = require('nunjucks');
const app = express();

nunjucks.configure('views', {
      autoescape: true,
      express: app,
      watch: true,
});

if (port == null || port == "") {
    port = 3000;
}

app.listen(port);
app.use(express.static('public'));

app.get('/', function(req, res) {
      res.render('home.njk');
});

app.get('/admin', function(req, res) {
      res.render('admin.njk');
});

app.post('/login', function(req, res) {
      // check if the user exists by email
      // confirm pw
      console.log('foo');
      res.render('admin.njk');
});
