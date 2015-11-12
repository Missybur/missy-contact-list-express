'use strict';

var express = require('express');
var router = express.Router();

// Model
var Contact = require('../models/contact');

router.get('/', function(req, res){
  Contact.find(function(err, contacts) {
    if(err) return res.status(400).send(err);
    res.render("contactss", {title: "My Contacts!", items: contacts});
  });
});

router.post("/", function(req, res){
  var clog = rew.body;
  Contact.create(contact, function(err){

  });
});

module.exports = router;
