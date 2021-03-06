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

