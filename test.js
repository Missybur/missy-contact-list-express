var Contact = require('./models/contact');


Contact.find(function(err, contacts) {
  if(err){
    console.log('ERROR:', err);
  } else {
    console.log('contacts:', contacts);
  }
});

