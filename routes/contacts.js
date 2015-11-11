'use strict';

var express = require('express');
var router = express.Router();

// Model
var Contact = require('../models/contact');

router.get('/', function(req, res){
  Contact.find(function(err, contacts) {
    if(err){
      return res.status(400).send(err);
    }
    res.send(contacts);
  });
});

module.exports = router;
