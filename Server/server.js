/**
 * Created by David on 30/03/2016.
 */

var express = require('express'); // go into node modules and find the express folder
var app = express();

app.use(express.static('../client'));   // sit and waits for requests
app.listen(8080)