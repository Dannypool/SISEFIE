define([
  'jquery',
  'underscore',
  'backbone',
  'vendor/text!template/GFE/nuevaFE.html'
], function($, _, Backbone, nuevaFETemplate){
  var NuevaFEView = Backbone.View.extend({
    el: $('#contenido'),
    render: function(){
      // Using Underscore we can compile our template with data
      var data = {};
      var compiledTemplate = _.template( nuevaFETemplate, data );
      // Append our compiled template to this Views "el"
      this.$el.append( compiledTemplate );
    }
  });
  // Our module now returns our view
  return NuevaFEView;
});