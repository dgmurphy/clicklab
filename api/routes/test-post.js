var express = require('express');
var router = express.Router();

router.post('/', (req, res) => {

    payload = req.body

    jsonStr = JSON.stringify(payload)
    
    console.log("Received: " + jsonStr)

    payloadText = payload.text
    responseJson = { 'text': payloadText }

    res.send(responseJson)

})


module.exports = router;
