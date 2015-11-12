'use strict';

var express = require('express');
var router = express.Router();
var Contact = require('../models/contact');


router.get('/', function(req, res){
  console.log("in index.js")
  Contact.find(function(err, contacts) {
    console.log(contacts)
    if(err) return res.status(400).send(err);
<<<<<<< HEAD
    res.render("index", {title: "Contact List", items: contacts});
=======
    res.render("index", {title: "My Contacts!", items: contacts});
  });
});

router.post("/", function(req, res){
  var contact = req.body;
  console.log("hello")
  Contact.create(contact, function(err){
    res.status(err ? 400 : 200).send(err || "contact create");
>>>>>>> c6d5e1d08bfc6c6696f7d172968bc66f84f86137
  });
});

module.exports = router;