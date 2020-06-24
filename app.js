const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const common = require('./common');
app.use(bodyParser.json());

app.post('/access', common.value);

app.listen(3000 , function()
{
    console.log('listening on.....');
});