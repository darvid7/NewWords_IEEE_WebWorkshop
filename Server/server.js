/**
 * Created by David on 30/03/2016.
 */

var express = require('express');           // go into node modules and find the express folder
var bodyParser = require('body-parser');
var Nedb = require('nedb');


var app = express();                        // remember the ()


var database = new Nedb ({filename: './data/data.db', autoload: true});
// . means this folder then data then data.db

app.use(express.static('../client'));       // sit and waits for requests

app.use(bodyParser.json());                 // everything gets passed through .use

// accept info from client via this post, if someone posts to this section of the site
// localhost:8080/saveCurrent will go to here
app.post('/saveCurrent', function(req, res){        // req = info sent from webapp, has ip, time, date, data etc access via dot
    // req.data
    // response, wha twe will send back
    //res.send();
    var data = {
            word: req.body.word,
            data: Date.now()
        };

    var done = function() {
        console.log("I just wrote to the database");
        res.end("done")
    };
    database.insert(data, done)
});




var port = 8080;
app.listen(port);
console.log("listening on port: " + port);

// note: any db is like mongo db but just stores your fils in a txt file