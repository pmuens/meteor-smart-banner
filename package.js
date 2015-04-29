Package.describe({
    name: "goltfisch:smart-banner",
    summary: "jQuery Smart Banner from @jasny, packaged for Meteor.js with jQuery",
    version: "0.1.0",
    git: "https://github.com/Goltfisch/meteor-smart-banner"
});

Package.onUse(function (api) {
    api.use('jquery@1.11.3_2', 'client');

    api.addFiles([
      'jquery.smartbanner.css',
      'jquery.smartbanner.js',
    ], 'client');
});
