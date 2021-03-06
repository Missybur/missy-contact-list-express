'use strict';

var express = require('express');
var router = express.Router();
var Contact = require('../models/contact');


router.get('/', function(req, res){
  console.log("in index.js")
  Contact.find(function(err, contacts) {
    console.log(contacts)
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