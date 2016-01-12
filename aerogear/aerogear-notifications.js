/**
 * This is the main node file, registering with node-red
 * The notifications functionality is abstracted out in the notification.js file
 */
module.exports = function(RED) {
  "use strict";

  function Aerogear(n) {
      var Notification = require('./notification'),
          sender;

      RED.nodes.createNode(this, n);
      //TODO (jos) extract a function to setStatus(context, message)
      if (!n.url || !n.appId || !n.masterSecret){
        this.status({
          fill:"red",
          shape: "ring",
          text: RED._('aerogear-notifications.errors.bad_config_args')
        });
      }
      else {
        this.status({});
      }

      var node = this;
      var settings = {
        url: n.url,
        applicationId: n.appId,
        masterSecret: n.masterSecret
      };

      try {
        sender = new Notification(settings);
        var msg = {};
        msg.key = this.key;
        msg.payload = RED._("aerogear-notifications.info.setup");
        this.send(msg);

        this.on('input', function (msg) {
          node.warn("Original payload: " + msg.payload);
          sender.sendMessage(msg, function(err, result){
            if (err) {
              msg.payload = JSON.stringify(err);
              node.status({
                fill:"red",
                shape: "dot",
                text: msg.payload
              });
              return node.send(msg);
            }
            msg.payload = result;
            node.send(msg);
            node.status({
              fill:"green",
              shape: "dot",
              text: RED._('aerogear-notifications.info.delivered')
            });
            setTimeout(function(){node.status({});}, 3000);
          });
        });
      }
      catch(exception) {
        var msg = {};
        msg.payload = RED._('aerogear-notifications.errors.bad_config_args');
        this.status({
          fill:"red",
          shape: "ring",
          text: msg.payload
        });
        this.send(msg);
      }

      this.on("close", function() {
        // Called when the node is shutdown - eg on redeploy.
        // Allows ports to be closed, connections dropped etc.
        // eg: node.client.disconnect();
      });
  }

  // Register the node by name. This must be called before overriding any of the
  // Node functions.
  RED.nodes.registerType("aerogear", Aerogear);

};
