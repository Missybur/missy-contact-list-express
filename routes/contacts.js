'use strict';

var express = require('express');
var router = express.Router();

// Model
var Contact = require('../models/contact');

router.get('/', function(req, res){
  Contact.find(function(err, contacts) {
    if(err) return res.status(400).send(err);
    res.render("index", {title: "My Contacts!", items: contacts});
  });
});

router.post("/", function(req, res){
  var contact = req.body;
  console.log("hello")
  Contact.create(contact, function(err){
    res.status(err ? 400 : 200).send(err || "contact create");
  });
});

module.exports = router;
