# node-red node for Push Notifications through Aerogear Unified Push Server
Initial commits for a node-red node to send push notifications to devices through AeroGear Unified Push Server.

# Usage

## As a node-red node
***NOTE: In the making***
The module will be (eventually) published to npm, but it's nowhere near ready.

If you want to try it (at your own peril), clone/fork this repo and cd into it.  Then use **npm link**. This will link the module to your current node installation. Now cd into the folder where your nodes are (generally ~/.node-red) and run **npm link node-red-contrib-aerogear-notifications**. Restart the server and you should see the aerogear node in the input tab.

## As a standalone module
Running standalone is not the purpose of this module (you should use the Aerogear module instead!). If you are curious about development, you can run the module from terminal with:

    node lib/aerogear.js

**Note:** You will need to add *url* *api_key* and *secret* to that file. To do so, you'll need to install UPS (locally or through OpenShift Online) and create an app.

# TODOs

  [] create the node-red html front
    [] decide on inputs and how to handle config file
    [] how to trigger the action with an inject block
    [] pass the url/key/secret to the js file (settings file?)
    [] create a proper configuration dialog for the node
  [X] investigate packaging and publication to npm
  [X] investigate how to link to local npm package for development
  [] investigate internationalisation


Jos - January 2016
