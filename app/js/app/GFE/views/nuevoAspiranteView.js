define([
  'jquery',
  'underscore',
  'backbone',
  'vendor/text!template/GFE/nuevoAspirante.html'
], function($, _, Backbone, nuevoAspiranteTemplate){
  var NuevoAspiranteView = Backbone.View.extend({
    el: $('#contenido'),
    render: function(){
      // Using Underscore we can compile our template with data
      var data = {};
      var compiledTemplate = _.template( nuevoAspiranteTemplate, data );
      // Append our compiled template to this Views "el"
      this.$el.append( compiledTemplate );
    }
  });
  // Our module now returns our view
  return NuevoAspiranteView;
});