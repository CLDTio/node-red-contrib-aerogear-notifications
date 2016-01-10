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

      function isConfigCorrect() {
        //TODO (jos) make sure that URL is an URL and the other two have at least a number of characters
        return !node.url || !node.key || !node.secret;
      }

      if (isConfigCorrect()){
        var msg = {};
        msg.payload = RED._('aerogear-notifications.errors.bad_config_args');
        this.send(msg);
        //TODO (jos) how to pass this message to the UI?
        console.log('CANNOT CONFIGURE AEROGEAR NODE');
        console.log(RED._('aerogear-notifications.errors.bad_config_args'));
      }
      else {
        var msg = {};
        msg.key = this.key;
        msg.payload = RED._("aerogear-notifications.info.setup");
        this.send(msg);
        console.log(RED._("aerogear-notifications.info.setup"));

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
