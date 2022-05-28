const express = require('express');
const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use('/public', express.static(__dirname + '/public'));
app.get('/', (_: any, res: any) => res.render('index.html'));
app.get('/*', (_: any, res: any) => res.redirect('/'));

app.listen(3000, console.log('http://localhost:3000'));
