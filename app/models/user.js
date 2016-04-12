import Model from 'ember-data/model';

export default Model.extend({
  name: DS.attr(),
  picture: DS.attr(),
  bands: DS.attr(),
  shows: DS.hasMany('show', {async: true}),
  active: DS.attr()
});
