define([
  'underscore',
  'backbone'
], function(_, Backbone){
  var AspiranteModel = Backbone.Model.extend({
  	idAttribute: 'id',

    defaults: {
		id: null, 
		nombre_aic: null,
		apell_pat_aic: null,
		apell_mat_aic: null,
		fec_nac_aic: null,
		lugar_nac_aic: null,
		sexo_aic: null,
		tipo_sangre_aic: null,
		curp_aic: null,
		rf_aic: null
    }
  });
  // Return the model for the module
  return AspiranteModel;
});