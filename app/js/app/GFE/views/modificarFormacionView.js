define([
  'jquery',
  'underscore',
  'backbone',
  'vendor/text!template/GFE/modificarFormacion.html'
], function($, _, Backbone, modificarFormacionTemplate){
  var ModificarFormacionView = Backbone.View.extend({
    el: $('#contenido'),
    render: function(){
      // Using Underscore we can compile our template with data
      var data = {};
      var compiledTemplate = _.template( modificarFormacionTemplate, data );
      // Append our compiled template to this Views "el"
      this.$el.append( compiledTemplate );
    }
  });
  // Our module now returns our view
  return ModificarFormacionView;
});