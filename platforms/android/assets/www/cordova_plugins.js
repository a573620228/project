cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-spinner-dialog.SpinnerDialog",
        "file": "plugins/cordova-plugin-spinner-dialog/www/spinner.js",
        "pluginId": "cordova-plugin-spinner-dialog",
        "merges": [
            "window.plugins.spinnerDialog"
        ]
    },
    {
        "id": "cordova-plugin-native-keyboard.NativeKeyboard",
        "file": "plugins/cordova-plugin-native-keyboard/www/NativeKeyboard.js",
        "pluginId": "cordova-plugin-native-keyboard",
        "clobbers": [
            "window.NativeKeyboard"
        ]
    },
    {
        "id": "com.dbaq.cordova.contactsPhoneNumbers.contactsPhoneNumbers",
        "file": "plugins/com.dbaq.cordova.contactsPhoneNumbers/www/contactsPhoneNumbers.js",
        "pluginId": "com.dbaq.cordova.contactsPhoneNumbers",
        "clobbers": [
            "navigator.contactsPhoneNumbers"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.2",
    "cordova-plugin-spinner-dialog": "1.3.1",
    "cordova-plugin-native-keyboard": "1.4.1",
    "com.dbaq.cordova.contactsPhoneNumbers": "0.0.9"
};
// BOTTOM OF METADATA
});