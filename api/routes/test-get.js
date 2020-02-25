var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {

    let param1 = req.query.param1;
    let param2 = req.query.param2;

    let answer = "You sent: param1 = " + param1 +
        ";  param2 = " + param2

    responseJson = { 'text': answer  }

    res.send(responseJson)
});

module.exports = router;
