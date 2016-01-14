# node-red node for Push Notifications through Aerogear Unified Push Server
Initial commits for a node-red node to send push notifications to Android devices through AeroGear Unified Push Server.

    DISCLAIMER: This is not an officially supported Aerogear node.
                I am in no way related to the Aerogear team.

# Installation

    NOTE:The module is in early stages and not fully operational.

The module will be (eventually) published to npm, but it's nowhere near ready. For now, follow the instructions in the Development section.

# Development

If you want to try it (at your own peril), or want to contribute to development, clone/fork this repo and `cd` into it.  Then use `npm install; npm link`. This will install dependencies and link the module to your current node installation. Now `cd` into the folder where your nodes are (generally **~/.node-red**) and run `npm link node-red-contrib-aerogear-notifications`. Restart the server and you should see the aerogear node in the *output* tab.


**Note:** You will need to add *url* *applicationId* and *masterSecret* to the notification file. To do so, you'll need to install [UPS](https://aerogear.org/push/#unifiedpush) (locally or through OpenShift Online) and create an app. More information in the Usage section.

# Usage

## the client app
This is a module to send *Push Notifications* to a mobile device. To do so, you will need to write such an app. The Aerogear [getting started guide](https://aerogear.org/docs/unifiedpush/aerogear-push-android/guides/) provides an step by step account on how to do so.

Note that you will not only have to setup the Unified Push Server, but you will also have to configure your GCM project in the Google developer console as explained in the [Aerogear guide](https://aerogear.org/docs/unifiedpush/aerogear-push-android/guides/).
## the module
Once you have an app ready, you can use the module as follows.

### config

[Screenshots and stuff here]

### basic flow

[Screenshots and stuff here]

Link to a gist for a flow.


# TODOs

    [X] create the node-red html front
      [X] decide on inputs and how to handle config file
        [X] Can I include an output for err and other for messages/success?
           I can, but it does not make much sense. Errors can be shown on UI
      [X] how to trigger the action with an inject block
      [X] create a proper configuration dialog for the node
      [X] figure out if the message is going to come as a payload, or something else
        [X] Most likely it should be an object with things like at least a title and body.
           To investigate this I am going to create a Client app now (on Android).
           FOR NOW it is just going to send msg.payload (can be changed in the future)
    [] finish functionality in js files
      [X] pass the url/key/secret to the js file (settings file?)
      [X] move isConfigCorrect to notifications file
      [X] use the config object to inject settings in notifications file
      [] create some unit tests for notifications file
      [X] strengthen the config validation function (isConfigCorrect)
        [X] This is already handled in the module itself.
      [X] change apikey = appid and secret = mastersecret to be consistent with node module
    [X] investigate packaging and publication to npm
    [X] investigate how to link to local npm package for development
    [X] investigate internationalisation
      [] figure out a way to test the different languages
    [X] investigate why the node appears in black (seems to be some issues)
    [X] investigate how to pass messages to the UI (e.g when node cannot be configured).
      [X] this can be done with the Status API.
    [] prepare the module for publishing
      [] publish to npm
      [] write docs
        [] How to use the module
        [] How to configure the module
        [] How to use the client (more like how to write a client)
        [] Link with App Inventor component

Jos - January 2016
