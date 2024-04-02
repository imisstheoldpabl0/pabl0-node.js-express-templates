const express = require("express");
const app = express();
const port = 3000;

app.use(express.static('public'));

app.set('view engine', 'pug');
app.set('views', './views');


app.get('/home', function (req, res) {
    res.render('home_view');
});

app.get('/who-we-are', function (req, res) {
    res.render('quienes_view');
});

app.get('/where-we-are', function (req, res) {
    res.render('donde_view');
});

app.get('/what-we-do', function (req, res) {
    res.render('que_view');
});

app.get('/contact-us', function (req, res) {
    res.render('contacto_view');
});

// http://localhost:3000
app.listen(port, () => {
    console.log(`Example app listening on  http://localhost:${port}`);
});