/**
 * Created by David on 30/03/2016.
 */

var express = require('express');           // go into node modules and find the express folder
var app = express();                        // remember the ()

app.use(express.static('../client'));       // sit and waits for requests
                                            

var port = 8080;
app.listen(port);
console.log("listening on port: " + port);