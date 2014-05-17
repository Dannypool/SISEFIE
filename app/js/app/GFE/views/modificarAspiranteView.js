define([
  'jquery',
  'underscore',
  'backbone',
  'vendor/text!template/GFE/modificarAspirante.html'
], function($, _, Backbone, modificarAspiranteTemplate){
  var ModificarAspiranteView = Backbone.View.extend({
    el: $('#contenido'),
    render: function(){
      // Using Underscore we can compile our template with data
      var data = {};
      var compiledTemplate = _.template( modificarAspiranteTemplate, data );
      // Append our compiled template to this Views "el"
      this.$el.append( compiledTemplate );
    }
  });
  // Our module now returns our view
  return ModificarAspiranteView;
});