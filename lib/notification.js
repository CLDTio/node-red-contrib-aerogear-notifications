var agSender = require( "unifiedpush-node-sender" ),
    settings = {
      url: "",
      applicationId: "",
      masterSecret: ""
    };

//TODO (jos) it may be a good idea to have a Constructor function with a
//settings object? This is going to change anyway when reading settings from UI
var sender = agSender.Sender(settings);

function sendMessage(message, cb) {

  if (!message){
    message = {};
    message.alert = 'Alert message goes here';
  }

  var options = {};

  sender.send( message, options, function( err, response ) {
    if (err) return cb(err);

    console.log( "success, calling the callback: ", response );
    return cb(null, response);
  });

};

module.exports = {
  sendMessage: sendMessage
};

