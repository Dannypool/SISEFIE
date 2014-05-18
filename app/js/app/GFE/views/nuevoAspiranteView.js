define([
  'jquery',
  'underscore',
  'backbone',
  'collections/GFE/aspirantes',
  'vendor/text!template/GFE/nuevoAspirante.html'
], function($, _, Backbone, AspiranteCollection, nuevoAspiranteTemplate){
  var NuevoAspiranteView = Backbone.View.extend({
    el: $('#contenido'),
    events: {
        'click .btn-save': 'guardar'
    },
    initialize: function(){
      this.collection = new AspiranteCollection();
      this.render();
      this.$nombre_aic = this.$('#nombre_aic') 
      this.$apell_pat_aic = this.$('#apell_pat_aic')
      this.$apell_mat_aic = this.$('#apell_mat_aic')
      this.$fec_nac_aic = this.$('#fec_nac_aic')
      this.$lugar_nac_aic = this.$('#lugar_nac_aic')
      this.$sexo_aic = this.$('#sexo_aic')
      this.$tipo_sangre_aic = this.$('#tipo_sangre_aic')
      this.$curp_aic = this.$('#curp_aic')
      this.$rf_aic = this.$('#rf_aic')
    },
    render: function(){
      // Using Underscore we can compile our template with data
      console.log(this.collection);
      var data = {};
      var compiledTemplate = _.template( nuevoAspiranteTemplate, data );
      // Append our compiled template to this Views "el"
      this.$el.append( compiledTemplate );
    },
    guardar: function(){
      var nuevoAspirante = {
        nombre_aic: this.$nombre_aic.val(),
        apell_pat_aic: this.$apell_pat_aic.val(),
        apell_mat_aic: this.$apell_mat_aic.val(),
        fec_nac_aic: this.$fec_nac_aic.val(),
        lugar_nac_aic: this.$lugar_nac_aic.val(),
        sexo_aic: this.$sexo_aic.val(),
        tipo_sangre_aic: this.$tipo_sangre_aic.val(),
        curp_aic: this.$curp_aic.val(),
        rf_aic: this.$rf_aic.val()
      }
      this.collection.create(nuevoAspirante);
      console.log(this.collection)
    } 
  });
  // Our module now returns our view
  return NuevoAspiranteView;
});