define([
  'jquery',
  'underscore',
  'backbone',
  'app/GFE/views/nuevoAspiranteView',
  'app/GFE/views/modificarAspiranteView',
  'app/GFE/views/nuevoCursoView',
  'app/GFE/views/modificarCursoView',
  'app/GFE/views/nuevaFormacionView',
  'app/GFE/views/modificarFormacionView',
  'app/GFE/views/nuevaFEView',
  'app/GFE/views/modificarFEView'
], function(
	$, 
	_, 
	Backbone, 
	NuevoAspiranteView, 
	ModificarAspiranteView, 
	NuevoCursoView, 
	ModificarCursoView, 
	NuevaFormacionView, 
	ModificarFormacionView,
	NuevaFEView, 
	ModificarFEView
	){
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      'Registro_Aspirante': 'RegistroAspirante',
      'Modificar_Aspirante': 'ModificarAspirante',
      'Registro_Curso': 'RegistroCurso',
      'Modificar_Curso': 'ModificarCurso',
      'Registro_Formacion': 'RegistroFormacion',
      'Modificar_Formacion': 'ModificarFormacion',
      'Registro_FE': 'RegistroFE',
      'Modificar_FE': 'ModificarFE',
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
      $('#contenido').empty();
      var nuevoAspiranteView = new NuevoAspiranteView();
      nuevoAspiranteView.render();
    });

    app_router.on('route:ModificarAspirante', function(){
    	console.log(ModificarAspiranteView)
      // Call render on the module we loaded in via the dependency array
      // 'views/projects/list'
      $('#contenido').empty();
      var modificarAspiranteView = new ModificarAspiranteView();
      modificarAspiranteView.render();
    });

    app_router.on('route:RegistroCurso', function(){
    	console.log('entre')
    	$('#contenido').empty();
      // Call render on the module we loaded in via the dependency array
      // 'views/projects/list'
      var nuevoCursoView = new NuevoCursoView();
      nuevoCursoView.render();
    });

    app_router.on('route:ModificarCurso', function(){
    	console.log(ModificarCursoView)
      // Call render on the module we loaded in via the dependency array
      // 'views/projects/list'
      $('#contenido').empty();
      var modificarCursoView = new ModificarCursoView();
      modificarCursoView.render();
    });

    app_router.on('route:RegistroFormacion', function(){
    	console.log('entre')
    	$('#contenido').empty();
      // Call render on the module we loaded in via the dependency array
      // 'views/projects/list'
      var nuevaFormacionView = new NuevaFormacionView();
      nuevaFormacionView.render();
    });

    app_router.on('route:ModificarFormacion', function(){
    	console.log(ModificarFormacionView)
      // Call render on the module we loaded in via the dependency array
      // 'views/projects/list'
      $('#contenido').empty();
      var modificarFormacionView = new ModificarFormacionView();
      modificarFormacionView.render();
    });

    app_router.on('route:RegistroFE', function(){
    	console.log('entre')
    	$('#contenido').empty();
      // Call render on the module we loaded in via the dependency array
      // 'views/projects/list'
      var nuevaFEView = new NuevaFEView();
      nuevaFEView.render();
    });

    app_router.on('route:ModificarFE', function(){
    	console.log(ModificarFEView)
      // Call render on the module we loaded in via the dependency array
      // 'views/projects/list'
      $('#contenido').empty();
      var modificarFEView = new ModificarFEView();
      modificarFEView.render();
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