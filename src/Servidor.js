const express = require ('express');
const routes = require('./router');
//const cors = require('cors');

const app = express();

app.use(express.json());
app.use(routes);

app .listen(3333);