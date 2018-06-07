'use strict';

const express = require('express');
const compression  = require('compression');
const port = 8080;
const app = express();

app.set('port', (process.env.PORT || port));
app.use(compression());
app.use(express.static(__dirname + '/public'));

app.listen(app.get('port'), _ => console.log(`Server listening on: http://localhost:${app.get('port')}`) );