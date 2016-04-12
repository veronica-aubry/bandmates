import Model from 'ember-data/model';

export default Model.extend({
  name: DS.attr(),
  image: DS.attr(),
  shows: DS.hasMany('show', {async: true}),
  active: DS.attr()
});
