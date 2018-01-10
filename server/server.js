const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

const koalasRouter = require('./routes/koalas.router');

//routes
app.use('/koalas', koalasRouter);

const port = 5000;
app.listen(port, () => {
console.log('server is up on: ', port);

});