//The build will inline common dependencies into this file.

requirejs.config({
  baseUrl: './js',
  paths: {
    'jquery':                   'vendor/jquery',
    'bootstrap':                'vendor/bootstrap',
    'backbone': 'vendor/backbone',
    'underscore': 'vendor/underscore',
    'template': '../../templates'
  },
  shim: {
    'bootstrap':                ['jquery'],
    'backbone': ['underscore']

  }
});

require([
  // Load our app module and pass it to our definition function
  'app/GFE/app',

], function(App){
  // The "app" dependency is passed in as "App"
  // Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function
  App.initialize();
});
