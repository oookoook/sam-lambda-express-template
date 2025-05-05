const express = require('express');
var cors = require('cors');

const app = express();

app.use(cors());


const isAuthenticated = function (req, res, next) {
    if(!process.env.API_KEY || process.env.API_KEY.length == 0) {
        console.log('Authentication disabled.');
        next();
        return;
    }

    if(req.query.key && req.query.key == process.env.API_KEY) {
        next();
    } else {
        res.sendStatus(403);
    }
  };

app.use(isAuthenticated);

app.route('/')
    .get(function(req, res) {
        // return hello world in JSON
        res.json({ message: 'Hello World!' });
    })

module.exports = app;


