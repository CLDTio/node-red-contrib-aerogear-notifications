/**
 * This is the main node file, registering with node-red
 * The notifications functionality is abstracted out in the notification.js file
 */
module.exports = function(RED) {
  "use strict";

  var notification = require('./notification');

  function Aerogear(n) {
      RED.nodes.createNode(this, n);

      var node = this;
      this.url = n.url;
      this.key = n.key;
      this.secret = n.secret;

      var msg = {};
      msg.key = this.key;
      msg.payload = "The AeroGear node is setting up!";
      // Example on accessing the internationalisation keys
      console.log(RED._("aerogear-notifications.label.name"));

      // this message will get sent at startup; might not appear in a debug node.
      this.send(msg);

      this.on('input', function (msg) {
        node.warn("Original payload: " + msg.payload);
        notification.sendMessage(null, function(err, result){
          if (err) {
            msg.payload = JSON.stringify(err);
            return node.send(msg);
          }
          msg.payload = result;
          node.send(msg);
        });
      });

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
