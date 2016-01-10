/**
 * This is the main node file, registering with node-red
 * The notifications functionality is abstracted out in the notification.js file
 */
module.exports = function(RED) {
  "use strict";

  var notification = require('./notification');

  function Aerogear(n) {
      // Create a RED node
      RED.nodes.createNode(this, n);

      var node = this;
      // Store local copies of the node configuration (as defined in the .html)
      this.topic = n.topic;
      this.url = n.url;

      // Do whatever you need to do in here - declare callbacks etc
      // Note: this sample doesn't do anything much - it will only send
      // this message once at startup...
      // Look at other real nodes for some better ideas of what to do....
      var msg = {};
      msg.topic = this.topic;
      msg.payload = "The AeroGear node is setting up!";

      console.log(RED._("aerogear-notifications.label.name"));
      console.log(RED._("label.topic"));
      console.log('NO IDEA WHATS HAPPENING HERE');

      // this message will get sent at startup; might not appear in a debug node.
      this.send(msg);

      // respond to inputs....
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
