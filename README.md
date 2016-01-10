# node-red node for Push Notifications through Aerogear Unified Push Server
Initial commits for a node-red node to send push notifications to devices through AeroGear Unified Push Server.

    note: this is not an officially supported Aerogear node.

# Usage
***NOTE: In the making***

The module will be (eventually) published to npm, but it's nowhere near ready.

If you want to try it (at your own peril), clone/fork this repo and cd into it.  Then use `npm install; npm link`. This will install dependencies and link the module to your current node installation. Now `cd` into the folder where your nodes are (generally **~/.node-red**) and run `npm link node-red-contrib-aerogear-notifications`. Restart the server and you should see the aerogear node in the *input* tab.


**Note:** You will need to add *url* *api_key* and *secret* to the notification file. To do so, you'll need to install UPS (locally or through OpenShift Online) and create an app.


# TODOs

    [] create the node-red html front
      [] decide on inputs and how to handle config file
        [] Can I include an output for err and other for messages/success?
      [X] how to trigger the action with an inject block
      [X] create a proper configuration dialog for the node
      [] figure out if the message is going to come as a payload, or something else
    [] finish functionality in js files
      [X] pass the url/key/secret to the js file (settings file?)
      [X] move isConfigCorrect to notifications file
      [X] use the config object to inject settings in notifications file
      [] create some unit tests for notifications file
      [] strengthen the config validation function (isConfigCorrect).
      [X] change apikey = appid and secret = mastersecret to be consistent with node module
    [X] investigate packaging and publication to npm
    [X] investigate how to link to local npm package for development
    [X] investigate internationalisation
      [] figure out a way to test the different languages
    [X] investigate why the node appears in black (seems to be some issues)
    [] investigate how to pass messages to the UI (e.g when node cannot be configured).

***On the other side*** I need to prepare something or link to a starter app project for aerogear.

Jos - January 2016
