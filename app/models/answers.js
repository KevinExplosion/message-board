import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.belongsTo('questions', { async: true}),
  author: DS.attr(),
  body: DS.attr()
});
