var express = require('express');
var router = express.Router();
var db = require("../data/db.js");
var bodyParser = require('body-parser');


router.get('/', async function(req, res, next) {

    db.many('select * from events', [true])
    .then(function (data) {
      res.status(200).json(JSON.stringify(data));
    }).catch((error) => {
      console.log("ERROR:", error); // print the error;
    });

});

module.exports = router;
