'use strict';

var agSender = require( "unifiedpush-node-sender" );

const ERROR_SETTINGS = 'Settings for Notification are not correct.';
var sender;

function Notification(settings){

  try {
    sender = agSender.Sender(settings);
  }
  catch (exception) {
    console.error(exception);
    //The module returns an String instead of an Error
    throw new Error(exception);
  }

}

Notification.prototype.sendMessage = function(message, cb) {

  if (!sender) return cb(new Error(ERROR_SETTINGS));

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

module.exports = Notification;
