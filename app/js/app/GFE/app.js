define([
  'jquery',
  'backbone',
  'underscore',
  'app/GFE/router',
  'bootstrap'
  
],

function ($, Backbone, _, Router) {
  'use strict';
  var initialize = function(){
    
      // Pass in our Router module and call it's initialize function
      Router.initialize();
    };

    return {
      initialize: initialize
    };
});