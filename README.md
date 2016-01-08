# node-red node for Push Notifications through Aerogear Unified Push Server
Initial commits for a node-red node to send push notifications to devices through AeroGear Unified Push Server.

# Usage
***NOTE: In the making***

The module will be (eventually) published to npm, but it's nowhere near ready.

If you want to try it (at your own peril), clone/fork this repo and cd into it.  Then use `npm install; npm link`. This will install dependencies and link the module to your current node installation. Now `cd` into the folder where your nodes are (generally **~/.node-red**) and run `npm link node-red-contrib-aerogear-notifications`. Restart the server and you should see the aerogear node in the *input* tab.


**Note:** You will need to add *url* *api_key* and *secret* to the notification file. To do so, you'll need to install UPS (locally or through OpenShift Online) and create an app.


# TODOs

    [] create the node-red html front
      [] decide on inputs and how to handle config file
      [X] how to trigger the action with an inject block
      [] pass the url/key/secret to the js file (settings file?)
      [] create a proper configuration dialog for the node
    [X] investigate packaging and publication to npm
    [X] investigate how to link to local npm package for development
    [] investigate internationalisation
    [] investigate why the node appears in black (seems to be some issues)


Jos - January 2016
