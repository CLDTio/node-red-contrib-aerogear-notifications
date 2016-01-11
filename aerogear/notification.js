'use strict';

var agSender = require( "unifiedpush-node-sender" );

const ERROR_SETTINGS = 'Settings for Notification are not correct.';
const ERROR_NO_MESSAGE = 'No message payload; Nothing to send.';
var sender;

function Notification(settings){

  try {
    sender = agSender.Sender(settings);
  }
  catch (exception) {
    console.error(exception);
    //The module returns a String instead of an Error
    throw new Error(exception);
  }
}

Notification.prototype.sendMessage = function(message, cb) {

  var newMessage = {},
      options = {};

  if (!sender) return cb(new Error(ERROR_SETTINGS));

  if (!message || !message.payload) return cb(new Error(ERROR_NO_MESSAGE));

  newMessage.alert = (message.payload).toString();
  sender.send( newMessage, options, function( err, response ) {
    if (err) return cb(err);

    console.log( "success, calling the callback: ", response );
    return cb(null, response);
  });
};

module.exports = Notification;
