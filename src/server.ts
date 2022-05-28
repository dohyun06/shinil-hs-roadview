const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use('/public', express.static(__dirname + '/public'));
app.get('/', (_: any, res: any) => res.render('index.html'));
app.get('/*', (_: any, res: any) => res.redirect('/'));

app.listen(PORT, console.log('http://localhost:3000'));

const http = require('http');

setInterval(() => {
    http.get('https://shinilhsrv.herokuapp.com/');
}, 600000);
