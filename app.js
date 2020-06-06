const express = require('express');
const nunjucks = require('nunjucks');
const app = express();

nunjucks.configure('views', {
      autoescape: true,
      express: app
});

app.get('/', function(req, res) {
      res.render('index.html');
});

app.use(express.static('public'));

let port = process.env.PORT;
if (port == null || port == "") {
    port = 3000;
}
app.listen(port);
