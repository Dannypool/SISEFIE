define([
  'jquery',
  'underscore',
  'backbone',
  'app/GFE/views/nuevoAspiranteView'
], function($, _, Backbone, NuevoAspiranteView){
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      'Registro_Aspirante': 'RegistroAspirante',

      // Default
      '*actions': 'defaultAction'
    }
  });

  var initialize = function(){
    var app_router = new AppRouter;
    app_router.on('route:RegistroAspirante', function(){
    	console.log('entre')
      // Call render on the module we loaded in via the dependency array
      // 'views/projects/list'
      var nuevoAspiranteView = new NuevoAspiranteView();
      nuevoAspiranteView.render();
    });
     
    app_router.on('route:defaultAction', function(actions){
      // We have no matching route, lets just log what the URL was
      console.log('No route:', actions);
    });
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});