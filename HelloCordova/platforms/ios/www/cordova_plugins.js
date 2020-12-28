cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "clevertap-cordova.CleverTap",
      "file": "plugins/clevertap-cordova/www/CleverTap.js",
      "pluginId": "clevertap-cordova",
      "clobbers": [
        "CleverTap"
      ]
    },
    {
      "id": "cordova-plugin-deeplinks.universalLinks",
      "file": "plugins/cordova-plugin-deeplinks/www/universal_links.js",
      "pluginId": "cordova-plugin-deeplinks",
      "clobbers": [
        "universalLinks"
      ]
    }
  ];
  module.exports.metadata = {
    "clevertap-cordova": "2.3.1",
    "cordova-plugin-deeplinks": "1.1.1",
    "cordova-plugin-whitelist": "1.3.4"
  };
});