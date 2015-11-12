'use strict';

var express = require('express');
var router = express.Router();
var Contact = require('../models/contact');


router.get('/', function(req, res){
  console.log("in index.js")
  Contact.find(function(err, contacts) {
    console.log(contacts)
    if(err) return res.status(400).send(err);
    res.render("index", {title: "Contact List", items: contacts});
  });
});

module.exports = router;