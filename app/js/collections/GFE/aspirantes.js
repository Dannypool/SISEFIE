define([
  'underscore',
  'backbone',
  // Pull in the Model module from above
  'models/GFE/aspirante'
], function(_, Backbone, AspiranteModel){
  var AspiranteCollection = Backbone.Collection.extend({
    model: AspiranteModel,
    url: 'http://192.168.100.9:3000/applicant_instructors'
  });
  // You don't usually return a collection instantiated
  return AspiranteCollection;
});