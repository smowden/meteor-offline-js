Package.describe({
    "summary": "Offline-JS wrapped and enhanced for Meteor",
    "version": "0.7.11",
    "description": "Automatically detect when a browser is offline",
    "name": "smowden:offline-js",
    "git": "https://github.com/smowden/meteor-offline-js.git"
});

Package.onUse(function (api){
    api.versionsFrom('0.9.4');

    api.use('tracker', 'client', 'sass');
    api.use('underscore', 'client');
    api.addFiles([ 'themes/offline-language-english-indicator.css',
        'themes/offline-language-english.css',
        'themes/offline-language-french-indicator.css',
        'themes/offline-language-french.css',
        'themes/offline-language-portuguese-brazil-indicator.css',
        'themes/offline-language-portuguese-brazil.css',
        'themes/offline-language-spanish-indicator.css',
        'themes/offline-language-spanish.css',
        'themes/offline-language-german-indicator.css',
        'themes/offline-language-german.css',
        'themes/offline-theme-dark.css'
    ], 'client');


    api.addFiles(['offline.min.js', 'meteor.offline.js'], 'client');

    //api.export("Offline");
});