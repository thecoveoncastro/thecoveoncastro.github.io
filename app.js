const express = require('express');
const nunjucks = require('nunjucks');
const app = express();
const port = 3000;

nunjucks.configure('views', {
      autoescape: true,
      express: app
});

app.get('/', function(req, res) {
      res.render('index.html');
});

app.use(express.static('public'));
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
