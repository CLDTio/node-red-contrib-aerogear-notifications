var agSender = require( "unifiedpush-node-sender" ),
    settings = {
      url: "",
      applicationId: "",
      masterSecret: ""
    };

var sender = agSender.Sender(settings);
var message = {};
message.alert = 'Alert message goes here';

var options = {};

sender.send( message, options, function( err, response ) {
  if (err) return console.log(err);

  console.log( "success called", response );
  return;
});
